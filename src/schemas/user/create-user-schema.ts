import { z } from "zod";

export const createUserBodySchema = z.object({
  email: z.string().email({ message: "Invalid e-mail address" }),
  firstname: z.string().min(1, { message: "Firstname is required" }),
  username: z.string().min(1, { message: "Username is required" }),
  password: z.string().min(1, { message: "Password is required" }),
  bio: z.string().min(10, { message: "Must be 10 characters or more long" }),
  avatar: z.string().min(1, { message: "Avatar is required" }),
});

export type CreateUserSchema = z.infer<typeof createUserBodySchema>;
