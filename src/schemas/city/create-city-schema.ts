import { z } from "zod";

export const createCityBodySchema = z.object({
  name: z.string().min(1),
  zipCode: z.string().min(1).max(8),
  googleMapsUri: z.string().min(1),
  stateId: z.string().min(1),
});

export type CreateCitySchema = z.infer<typeof createCityBodySchema>;
