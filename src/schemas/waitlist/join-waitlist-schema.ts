import { z } from "zod";

export const joinWaitlistBodySchema = z.object({
  email: z.string().email().min(1),
  firstname: z.string().min(1),
});

export type JoinWaitlistSchema = z.infer<typeof joinWaitlistBodySchema>;
