import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { postProduct } from "../api";
import { CreateNewProductInput } from "../schema";

export const useCreateProduct = () => {
  const { mutateAsync: createProduct } = useMutation(
    (productCreateInput: CreateNewProductInput) =>
      postProduct(productCreateInput),
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

  return { createProduct };
};
