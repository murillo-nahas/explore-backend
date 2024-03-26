import { z } from "zod";

export const createCityBodySchema = z.object({
  name: z.string().min(2, { message: "Must be 2 or more characters long" }),
  zipCode: z.string().min(1).max(8, { message: "Must be 8 characters long" }),
  googleMapsUri: z.string().url({ message: "Invalid url" }),
  stateId: z.string().uuid({ message: "Invalid UUID" }),
});

export type CreateCitySchema = z.infer<typeof createCityBodySchema>;
