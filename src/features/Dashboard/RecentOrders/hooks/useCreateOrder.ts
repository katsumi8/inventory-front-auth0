import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { CreateOrderInput, postOrder } from "../api";

export const useCreateOrder = () => {
  const { mutateAsync: createOrder } = useMutation(
    (orderCreateInput: CreateOrderInput) => postOrder(orderCreateInput),
    {
      onError(error: any) {
        if (axios.isAxiosError(error)) {
          if (error.response?.data) {
            console.log("error body: ", error.response.data);
          }
          console.log("error message: ", error.message);
        } else {
          console.log("unexpected error: ", error);
        }
      },
    },
  );

  return { createOrder };
};
