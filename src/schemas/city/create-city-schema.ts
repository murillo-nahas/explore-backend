import { z } from "zod";

export const createCityBodySchema = z.object({
  name: z.string().min(1),
  acronym: z.string().min(1).max(2),
  zipCode: z.string().min(1).max(8),
  stateId: z.number().min(1),
});

export type CreateCitySchema = z.infer<typeof createCityBodySchema>;
