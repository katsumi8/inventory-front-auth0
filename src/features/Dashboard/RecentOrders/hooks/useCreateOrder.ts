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

export const useCreateOrder = () => {
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

  const setOrderConfirm = useOrderStore((state) => state.setOrder);
  const methods = useForm<CreateNewOrderInput>({
    resolver: zodResolver(createNewOrderSchema),
    defaultValues: {
      orderLines: [
        {
          productId: "",
          quantity: 0,
          unit: "",
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
      unit: "",
    });
  };

  const onSubmitHandler: SubmitHandler<CreateNewOrderInput> = async (
    values
  ) => {
    console.log(values);
    // setOrderConfirm(values);
    // router.push("orders/new/confirm");
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
