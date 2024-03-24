import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  UsePipes,
} from "@nestjs/common";
import { BookmarkService } from "./bookmark.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  BookmarkSchema,
  bookmarkBodySchema,
} from "src/schemas/bookmark/bookmark-schema";

@Controller("/bookmark")
export class BookmarkController {
  constructor(private service: BookmarkService) {}

  @Get(":id")
  async getAllUserBookmarks(@Param() userId: string) {
    return this.service.getAllUserBookmarks(userId);
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(bookmarkBodySchema))
  async bookmark(@Body() { placeId, userId }: BookmarkSchema) {
    return this.service.bookmark(placeId, userId);
  }
}
