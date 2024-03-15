import { z } from "zod";

export const createStateBodySchema = z.object({
  name: z.string().min(1),
  acronym: z.string().min(1),
});

export type CreateStateSchema = z.infer<typeof createStateBodySchema>;
