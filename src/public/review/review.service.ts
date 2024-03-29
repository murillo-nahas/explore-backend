import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateReviewSchema } from "src/schemas/review/create-review-schema";

@Injectable()
export class ReviewService {
  constructor(private prisma: PrismaService) {}

  async findAllReviewsByUser(userId: string) {
    const reviews = await this.prisma.review.findMany({
      where: {
        userId: userId,
      },
    });

    if (!reviews) throw new NotFoundException("Cannot find user.");

    return {
      reviews,
    };
  }

  async findAllReviewsByPlace(placeId: string) {
    const reviews = await this.prisma.review.findMany({
      where: {
        placeId: placeId,
      },
    });

    if (!reviews) throw new NotFoundException("Cannot find place.");

    return {
      reviews,
    };
  }

  async create(body: CreateReviewSchema) {
    const review = await this.prisma.review.create({
      data: {
        comment: body.comment,
        userId: body.userId,
        placeId: body.placeId,
      },
    });

    return review;
  }

  async update(id: string, data: CreateReviewSchema) {
    return await this.prisma.review.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.prisma.review.delete({
      where: {
        id,
      },
    });

    return;
  }
}
