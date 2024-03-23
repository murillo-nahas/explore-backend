import { z } from "zod";

export const createUserBodySchema = z.object({
  email: z.string().email().min(1),
  firstname: z.string().min(1),
  username: z.string().min(1),
  password: z.string().min(1),
  bio: z.string().min(1),
  avatar: z.string().min(1),
});

export type CreateUserSchema = z.infer<typeof createUserBodySchema>;
