import { Module } from "@nestjs/common";
import { BookmarkService } from "./bookmark.service";
import { BookmarkController } from "./bookmark.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [BookmarkController],
  providers: [BookmarkService, PrismaService],
})
export class BookmarkModule {}
