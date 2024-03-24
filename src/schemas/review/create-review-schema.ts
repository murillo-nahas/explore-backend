import { z } from "zod";

export const createReviewBodySchema = z.object({
  comment: z.string().min(1),
  userId: z.string().min(1),
  placeId: z.string().min(1),
});

export type CreateReviewSchema = z.infer<typeof createReviewBodySchema>;
