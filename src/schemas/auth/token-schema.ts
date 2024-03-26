import { z } from "zod";

export const tokenSchema = z.object({
  sub: z.string().uuid(),
});

export type TokenSchema = z.infer<typeof tokenSchema>;
