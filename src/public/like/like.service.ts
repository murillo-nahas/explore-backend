import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class LikeService {
  constructor(private prisma: PrismaService) {}

  async getAllUserLikes(userId: string) {
    const likes = await this.prisma.like.findMany({
      where: {
        userId: userId,
      },
    });

    if (!likes) throw new NotFoundException("Cannot find user.");

    return { likes };
  }

  async like(placeId: string, userId: string) {
    if (!userId) {
      throw new NotFoundException("Cannot find user.");
    }

    const existingLike = await this.prisma.like.findFirst({
      where: {
        placeId,
        userId,
      },
    });

    if (existingLike) {
      const like = await this.prisma.like.update({
        where: {
          id: existingLike.id,
        },
        data: {
          deletedAt: existingLike.deletedAt === null ? new Date() : null,
        },
      });

      return {
        like,
      };
    }

    const like = await this.prisma.like.create({
      data: {
        placeId,
        userId,
      },
    });

    return { like };
  }
}
