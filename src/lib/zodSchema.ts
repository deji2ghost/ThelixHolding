import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  price: z.number().min(0.01, "Price must be number"),
  imageUrl: z.string().min(1, "Image is required"),
  category: z.string().min(1, "Category is required"),
});

export type ProductFormData = z.infer<typeof productSchema>;
