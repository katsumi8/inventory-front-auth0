import { object, string, TypeOf } from "zod";
export const productCategories = [
  "Beverages",
  "Pastries",
  "Sandwiches",
] as const;

export type ProductCategory = (typeof productCategories)[number];

// A single line schema
const singleLineSchema = object({
  productName: string().min(1, "Product name is required"),
  productCategory: string().min(1, "Category is required"),
  quantity: string()
    .refine((val) => /^[1-9]\d*$/.test(val), {
      message: "Quantity must be at least 1",
    })
    .transform((val) => parseInt(val, 10)),
  unit: string().min(1, "Unit is required"),
});

export const createNewOrderSchema = object({
  orderLines: singleLineSchema.array(),
  supplier: string().min(1, "Supplier is required"),
  additionalNotes: string().optional(),
});

export type CreateNewOrderInput = TypeOf<typeof createNewOrderSchema>;
