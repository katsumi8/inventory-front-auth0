import { apiClient } from "@/api";
import { BaseRespose } from "@/types";
import { CreateNewProductInput } from "../schema";
import { ProductResponse } from "../types";

export const getProducts = async () => {
  const response = await apiClient.get<ProductResponse>("products");
  return response.data;
};

export const postProduct = async (product: CreateNewProductInput) => {
  const response = await apiClient.post<BaseRespose>("products", product);
  return response.data;
};
