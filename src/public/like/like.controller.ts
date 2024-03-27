import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UseGuards,
  UsePipes,
} from "@nestjs/common";
import { LikeService } from "./like.service";
import { LikeSchema, likeBodySchema } from "src/schemas/like/like-schema";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@Controller("/like")
export class LikeController {
  constructor(private service: LikeService) {}

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  async getAllUserLikes(@Param() userId: string) {
    return this.service.getAllUserLikes(userId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(likeBodySchema))
  async like(@Body() { placeId, userId }: LikeSchema) {
    return this.service.like(placeId, userId);
  }
}
