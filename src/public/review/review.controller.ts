import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
} from "@nestjs/common";
import { ReviewService } from "./review.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  CreateReviewSchema,
  createReviewBodySchema,
} from "src/schemas/review/create-review-schema";

@Controller("/review")
export class ReviewController {
  constructor(private service: ReviewService) {}

  @Get(":id")
  findAllReviewsByUser(@Param("id") userId: string) {
    return this.service.findAllReviewsByUser(userId);
  }

  @Get(":id")
  findAllReviewsByPlace(@Param("id") placeId: string) {
    return this.service.findAllReviewsByPlace(placeId);
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createReviewBodySchema))
  async create(@Body() body: CreateReviewSchema) {
    return this.service.create(body);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: CreateReviewSchema) {
    return this.service.update(id, data);
  }

  @Delete(":id")
  @HttpCode(204)
  async delete(@Param("id") id: string) {
    return this.service.delete(id);
  }
}
