import { object, string, TypeOf } from "zod";

export const createNewProductSchema = object({
  itemName: string().min(1, "Product name is required"),
  itemCategory: string().min(1, "Product category is required"),
  stockKeepingUnit: string().min(1, "Stock Keeping Unit is required"),
  unit: string().min(1, "Unit is required"),
  universalProductCode: string().optional(),
  manufacturer: string().optional(),
  salesPrice: string().min(1, "Sales price is required"),
  salesAccount: string().min(1, "Sales account is required"),
  salesDescription: string().optional(),
  purchasePrice: string().min(1, "Purchase price is required"),
  purchaseAccount: string().min(1, "Purchase account is required"),
  purchaseDescription: string().optional(),
  openingStockValue: string().optional(),
  ReorderValue: string().optional(),
});

export type CreateNewProductInput = TypeOf<typeof createNewProductSchema>;
