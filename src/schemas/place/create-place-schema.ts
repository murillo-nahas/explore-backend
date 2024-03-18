import { z } from "zod";

export const createPlaceBodySchema = z.object({
  name: z.string().min(1),
  overview: z.string().min(1),
  googleMapsUri: z.string().url().min(1),
  street: z.string().min(1),
  number: z.string().min(1),
  district: z.string().min(1),
  zipCode: z.string().min(1).max(8),
  cityId: z.string().min(1),
  categoryId: z.string().min(1),
});

export type CreatePlaceSchema = z.infer<typeof createPlaceBodySchema>;
