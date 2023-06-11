import { OrderLine } from "../../RecentOrders/types";

export interface Product {
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
