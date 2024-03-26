import { z } from "zod";

export const joinWaitlistBodySchema = z.object({
  email: z.string().email({ message: "Invalid e-mail address" }),
  firstname: z.string().min(1, { message: "Firstname is required" }),
});

export type JoinWaitlistSchema = z.infer<typeof joinWaitlistBodySchema>;
