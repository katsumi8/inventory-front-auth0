import { object, literal, string, TypeOf, union, z } from "zod";
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
  // productName: string().min(1, "Product name is required"),
  // productCategory: string().min(1, "Category is required"),
  // // .refine(
  // //   (val) => productCategories.includes(val as ProductCategory),
  // //   {
  // //     message: "Please select a valid product category",
  // //   }
  // // ),
  // quantity: string()
  //   .refine((val) => /^[1-9]\d*$/.test(val), {
  //     message: "Quantity must be at least 1",
  //   })
  //   .transform((val) => parseInt(val, 10)),
  // unit: string().refine(
  //   (val) => ["Pieces", "Grams", "Liters", "Kilograms"].includes(val),
  //   {
  //     message: "Please select a valid unit of measurement",
  //   }
  // ),
  orderLines: singleLineSchema.array(),
  supplier: string().min(1, "Supplier is required"),
  // orderDate: date(),
  // expectedDeliveryDate: date(),
  // pricePerUnit: number().min(0, "Price per unit must be non-negative"),
  additionalNotes: string().optional(),
});

export type CreateNewOrderInput = TypeOf<typeof createNewOrderSchema>;
