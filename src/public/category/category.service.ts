import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCategorySchema } from "src/schemas/category/create-category-schema";
import { string } from "zod";

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const categories = await this.prisma.category.findMany();

    return { categories };
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({
      where: {
        id,
      },
    });

    if (!category) throw new NotFoundException("Cannot find category");

    return {
      category,
    };
  }

  async create(body: CreateCategorySchema) {
    const category = await this.prisma.category.create({
      data: {
        name: body.name,
      },
    });

    return { category };
  }

  async update(id: string, data: CreateCategorySchema) {
    return await this.prisma.category.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.prisma.category.delete({
      where: {
        id,
      },
    });

    return;
  }
}
