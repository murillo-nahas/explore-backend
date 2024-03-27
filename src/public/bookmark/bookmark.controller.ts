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
import { BookmarkService } from "./bookmark.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  BookmarkSchema,
  bookmarkBodySchema,
} from "src/schemas/bookmark/bookmark-schema";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@Controller("/bookmark")
export class BookmarkController {
  constructor(private service: BookmarkService) {}

  @Get(":id")
  @UseGuards(JwtAuthGuard)
  async getAllUserBookmarks(@Param() userId: string) {
    return this.service.getAllUserBookmarks(userId);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(bookmarkBodySchema))
  async bookmark(@Body() { placeId, userId }: BookmarkSchema) {
    return this.service.bookmark(placeId, userId);
  }
}
