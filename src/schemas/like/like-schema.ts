import { z } from "zod";

export const likeBodySchema = z.object({
  placeId: z.string().uuid({ message: "Invalid UUID" }),
  userId: z.string().uuid({ message: "Invalid UUID" }),
});

export type LikeSchema = z.infer<typeof likeBodySchema>;
