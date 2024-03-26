import { z } from "zod";

export const bookmarkBodySchema = z.object({
  placeId: z.string().uuid({ message: "Invalid UUID" }),
  userId: z.string().uuid({ message: "Invalid UUID" }),
});

export type BookmarkSchema = z.infer<typeof bookmarkBodySchema>;
