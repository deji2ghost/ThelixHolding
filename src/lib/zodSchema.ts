import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number({ invalid_type_error: "Price must be a number" })
  .min(0.01, "Price must be greater than 0"),
  imageUrl: z.string().min(1, "Image is required"),
  category: z.string().min(1, "Category is required"),
});

export type ProductFormData = z.infer<typeof productSchema>;
