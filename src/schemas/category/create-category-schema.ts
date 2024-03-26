import { z } from "zod";

export const createCategoryBodySchema = z.object({
  name: z.string().min(4, { message: "Must be 4 or more characters long" }),
});

export type CreateCategorySchema = z.infer<typeof createCategoryBodySchema>;
