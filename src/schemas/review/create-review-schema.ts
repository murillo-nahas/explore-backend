import { z } from "zod";

export const createReviewBodySchema = z.object({
  comment: z.string().min(1, { message: "Comment is required" }),
  userId: z.string().uuid({ message: "Invalid UUID" }),
  placeId: z.string().uuid({ message: "Invalid UUID" }),
});

export type CreateReviewSchema = z.infer<typeof createReviewBodySchema>;
