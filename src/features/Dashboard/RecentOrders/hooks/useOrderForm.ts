import {
  CreateNewOrderInput,
  createNewOrderSchema,
} from "@/features/Dashboard/RecentOrders/schema/newOrderForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import { getProducts } from "../../Products/api";
import { useOrderStore } from "../store";
import { useCreateOrder } from "./useCreateOrder";

export const useOrderForm = () => {
  const router = useRouter();
  const {
    isLoading,
    isError,
    data: products,
  } = useQuery(["products"], () => getProducts(), {
    select: (data) => data.data,
    cacheTime: 0,
    retry: false,
  });

  const { createOrder } = useCreateOrder();
  const setOrderConfirm = useOrderStore((state) => state.setOrder);
  const methods = useForm<CreateNewOrderInput>({
    resolver: zodResolver(createNewOrderSchema),
    defaultValues: {
      orderLines: [
        {
          productId: "",
          quantity: 0,
        },
      ],
    },
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    control,
    register,
    watch,
  } = methods;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "orderLines",
  });

  const handleAddItemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    append({
      productId: "0",
      quantity: 0,
    });
  };

  const onSubmitHandler: SubmitHandler<CreateNewOrderInput> = async (
    values
  ) => {
    console.log(values);
    try {
      await createOrder(values);

      const transformedOrderLines = values.orderLines.map((line) => {
        // Find the product that matches the `productId`
        const product = products?.find(
          (product) => product.id === parseInt(line.productId)
        );
        // If no matching product was found, throw an error
        if (!product) {
          throw new Error(`Product with id ${line.productId} not found`);
        }
        // Return the transformed line
        return {
          productName: product.itemName,
          productCategory: product.itemCategory,
          quantity: line.quantity,
          unit: product.unit,
        };
      });
      setOrderConfirm({
        supplier: values.supplier,
        additionalNotes: values.additionalNotes,
        orderLines: transformedOrderLines,
      });
      router.push("orders/new/confirm");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return {
    methods,
    handleSubmit,
    onSubmitHandler,
    fields,
    errors,
    remove,
    handleAddItemClick,
    products,
    register,
    watch,
  };
};
