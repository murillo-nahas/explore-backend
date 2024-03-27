import { string } from "zod";
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
} from "@nestjs/common";
import { CategoryService } from "./category.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  CreateCategorySchema,
  createCategoryBodySchema,
} from "src/schemas/category/create-category-schema";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@Controller("/category")
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Get()
  async find() {
    return this.service.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.service.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createCategoryBodySchema))
  async create(@Body() body: CreateCategorySchema) {
    return this.service.create(body);
  }

  @Put(":id")
  @UseGuards(JwtAuthGuard)
  async update(@Param("id") id: string, @Body() data: CreateCategorySchema) {
    return this.service.update(id, data);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  async delete(@Param("id") id: string) {
    return this.service.delete(id);
  }
}
