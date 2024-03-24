import { z } from "zod";

export const bookmarkBodySchema = z.object({
  placeId: z.string().min(1),
  userId: z.string().min(1),
});

export type BookmarkSchema = z.infer<typeof bookmarkBodySchema>;
