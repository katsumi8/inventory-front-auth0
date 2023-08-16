import { apiClient } from "@/backendApi";
import { BaseRespose } from "@/types";
import { OrderResponse } from "../types";

export type CreateOrderInput = {
  ProductName: string;
  Supplier: string;
  AdditionalNotes?: string;
  Quantity: number;
  UserID: number;
};

export const getOrders = async () => {
  const response = await apiClient.get<OrderResponse>("orders");
  return response.data;
};

export const postOrder = async (order: CreateOrderInput) => {
  const response = await apiClient.post<BaseRespose>("orders", order);
  return response.data;
};
