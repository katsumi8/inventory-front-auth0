import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { postOrder } from "../api";
import { CreateNewOrderInput } from "../schema/newOrderForm.schema";

export const useCreateOrder = () => {
  const { mutateAsync: createOrder } = useMutation(
    (productCreateInput: CreateNewOrderInput) => postOrder(productCreateInput),
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
    }
  );

  return { createOrder };
};
