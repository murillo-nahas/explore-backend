import { z } from "zod";

export const createPlaceBodySchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  overview: z.string().min(10, { message: "Must be 10 characters long" }),
  googleMapsUri: z.string().url({ message: "Invalid url" }),
  street: z.string().min(1, { message: "Street is required" }),
  number: z.string().min(1, { message: "Number is required" }),
  district: z.string().min(1, { message: "District is required" }),
  zipCode: z.string().min(1).max(8, { message: "Must be 8 characters long" }),
  cityId: z.string().uuid({ message: "Invalid UUID" }),
  categoryId: z.string().uuid({ message: "Invalid UUID" }),
});

export type CreatePlaceSchema = z.infer<typeof createPlaceBodySchema>;
