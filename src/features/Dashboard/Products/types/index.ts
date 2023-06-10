import { IUser } from "@/features/Auth/types";

interface Order {
  id: number;
  supplier: string;
  additionalNotes?: string;
  createdAt: Date;
  updatedAt: Date;
  orderLines: OrderLine[];
  User?: IUser;
  userId?: string;
}

interface OrderLine {
  id: number;
  quantity: number;
  orderId: number;
  order: Order;
  productId: number;
  product: Product;
  createdAt: Date;
  updatedAt: Date;
}

interface Product {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  itemName: string;
  itemCategory: string;
  stockKeepingUnit: string;
  unit: string;
  universalProductCode?: string; // '?' denotes that the field is optional
  manufacturer?: string;
  salesPrice: number;
  salesAccount: string;
  salesDescription?: string;
  purchasePrice: number;
  purchaseAccount: string;
  purchaseDescription?: string;
  openingStockValue?: number;
  reorderValue?: number;
  OrderLine: OrderLine[];
}

export interface ProductResponse {
  errors: string[];
  data: Product[];
}
