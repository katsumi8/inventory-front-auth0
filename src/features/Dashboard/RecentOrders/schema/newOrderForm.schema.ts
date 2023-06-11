import { object, string, TypeOf } from "zod";

// A single line schema
const singleLineSchema = object({
  productId: string().min(1, "Product name is required"),
  quantity: string()
    .refine((val) => /^[1-9]\d*$/.test(val), {
      message: "Quantity must be at least 1",
    })
    .transform((val) => parseInt(val, 10)),
});

export const createNewOrderSchema = object({
  orderLines: singleLineSchema.array(),
  supplier: string().min(1, "Supplier is required"),
  additionalNotes: string().optional(),
});

export type CreateNewOrderInput = TypeOf<typeof createNewOrderSchema>;
