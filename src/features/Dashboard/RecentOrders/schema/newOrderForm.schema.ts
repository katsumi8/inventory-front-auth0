import { object, string, TypeOf } from "zod";

export const createNewOrderSchema = object({
  productName: string().min(1, "Product name is required"),
  supplier: string().min(1, "Supplier is required"),
  quantity: string().min(1, "Quantity is required"),
  additionalNotes: string().optional(),
});

export type CreateNewOrderInput = TypeOf<typeof createNewOrderSchema>;
