import { CategoryService } from "./category.service";
import { CategoryController } from "./category.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { Module } from "@nestjs/common";

@Module({
  controllers: [CategoryController],
  providers: [CategoryService, PrismaService],
})
export class CategoryModule {}
