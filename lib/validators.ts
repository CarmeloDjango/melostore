import { z } from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency = z
  .string()
  .refine(
    (value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),
    "Price must have exactly two decimal places"
  );

// Schema for inserting products
export const insertProductSchema = z.object({
  name: z.string().min(1, "Name must ba at leat 1 characters"),
  slug: z.string().min(1, "Slug must ba at leat 1 characters"),
  category: z.string().min(1, "Category must ba at leat 1 characters"),
  brand: z.string().min(1, "Brand must ba at leat 1 characters"),
  description: z.string().min(1, "Description must ba at leat 1 characters"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1, "Product must have at leat one image"),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});
