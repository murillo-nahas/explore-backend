import { z } from "zod";

export const createPlaceBodySchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  googleMapsUrl: z.string().url().min(1),
  street: z.string().min(1),
  number: z.number().min(1),
  district: z.string().min(1),
  zipCode: z.string().min(1).max(8),
  cityId: z.number().min(1),
});

export type CreatePlaceSchema = z.infer<typeof createPlaceBodySchema>;
