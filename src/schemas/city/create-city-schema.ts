import { z } from "zod";

export const createCityBodySchema = z.object({
  name: z.string(),
  acronym: z.string().max(2),
  zipCode: z.string().max(8),
  stateId: z.number(),
});

export type CreateCitySchema = z.infer<typeof createCityBodySchema>;
