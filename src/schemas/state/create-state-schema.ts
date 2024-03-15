import { z } from "zod";

export const createStateBodySchema = z.object({
  name: z.string(),
  acronym: z.string(),
});

export type CreateStateSchema = z.infer<typeof createStateBodySchema>;
