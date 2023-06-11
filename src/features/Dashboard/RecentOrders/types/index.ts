import { IUser } from "@/features/Auth/types";
import { Product } from "../../Products/types";

interface Order {
  id: number;
  supplier: string;
  additionalNotes?: string;
  createdAt: string;
  updatedAt: Date;
  status: string;
  orderLines: OrderLine[];
  userId?: string;
}

export interface OrderLine {
  id: number;
  quantity: number;
  orderId: number;
  order: Order;
  productId: number;
  product: Product;
  createdAt: Date;
  updatedAt: Date;
}
export interface OrderResponse {
  errors: string[];
  data: Order[];
}
