import { apiClient } from "@/api";
import { BaseRespose } from "@/types";
import { CreateNewOrderInput } from "../schema/newOrderForm.schema";
import { OrderResponse } from "../types";

export const getOrders = async () => {
  const response = await apiClient.get<OrderResponse>("orders");
  return response.data;
};

export const postOrder = async (order: CreateNewOrderInput) => {
  const response = await apiClient.post<BaseRespose>("orders", order);
  return response.data;
};
