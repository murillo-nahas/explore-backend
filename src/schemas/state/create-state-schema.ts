import { z } from "zod";

export const createStateBodySchema = z.object({
  name: z.string().min(4, { message: "Must be 4 or more characters long" }),
  country: z.string().min(3, { message: "Must be 3 characters or more long " }),
  acronym: z.string().min(2, { message: "Must be 2 or more characters long" }),
});

export type CreateStateSchema = z.infer<typeof createStateBodySchema>;
