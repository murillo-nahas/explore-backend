import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class BookmarkService {
  constructor(private prisma: PrismaService) {}

  async getAllUserBookmarks(userId: string) {
    const bookmarks = await this.prisma.bookmark.findMany({
      where: {
        userId,
      },
    });

    if (!bookmarks) throw new NotFoundException("Cannot find user.");

    return { bookmarks };
  }

  async bookmark(placeId: string, userId: string) {
    if (!userId) {
      throw new NotFoundException("Cannot find user.");
    }

    const existingBookmark = await this.prisma.bookmark.findFirst({
      where: {
        placeId,
        userId,
      },
    });

    if (existingBookmark) {
      const bookmark = await this.prisma.bookmark.update({
        where: {
          id: existingBookmark.id,
        },
        data: {
          deletedAt: existingBookmark.deletedAt === null ? new Date() : null,
        },
      });

      return {
        bookmark,
      };
    }

    const bookmark = await this.prisma.bookmark.create({
      data: {
        placeId,
        userId,
      },
    });

    return { bookmark };
  }
}
