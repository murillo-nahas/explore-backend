import { z } from "zod";

export const likeBodySchema = z.object({
  placeId: z.string().min(1),
  userId: z.string().min(1),
});

export type LikeSchema = z.infer<typeof likeBodySchema>;
