import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class StateService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const states = await this.prisma.state.findMany();

    if (!states) throw new NotFoundException();

    return { states };
  }

  async findOne(id: number) {
    const state = await this.prisma.state.findUnique({
      where: {
        id,
      },
    });

    if (!state) return NotFoundException;

    return {
      state,
    };
  }

  async create(body: any) {
    const data = await this.prisma.state.create({
      data: {
        acronym: body.acronym,
        name: body.name,
      },
    });

    return data;
  }

  async update(id: any, data: any) {
    return this.prisma.state.update({ where: { id }, data });
  }

  async delete(id: number) {
    const deleteById = this.prisma.state.delete({
      where: {
        id,
      },
    });

    if (!deleteById) return NotFoundException;

    return {};
  }
}
