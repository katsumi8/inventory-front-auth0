import {
  CreateNewOrderInput,
  createNewOrderSchema,
} from "@/features/Dashboard/RecentOrders/schema/newOrderForm.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useOrderStore } from "../store";

export const useOrderForm = () => {
  const router = useRouter();

  const setOrderConfirm = useOrderStore((state) => state.setOrder);
  const methods = useForm<CreateNewOrderInput>({
    resolver: zodResolver(createNewOrderSchema),
  });
  const {
    reset,
    handleSubmit,
    formState: { isSubmitSuccessful, errors },
    register,
    watch,
  } = methods;

  const onSubmitHandler: SubmitHandler<CreateNewOrderInput> = async (
    values,
  ) => {
    try {
      setOrderConfirm({
        supplier: values.supplier,
        productName: values.productName,
        quantity: Number(values.quantity),
        additionalNotes: values.additionalNotes,
      });
      router.replace("orders/new/confirm");
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
    errors,
    register,
    watch,
  };
};
