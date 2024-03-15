import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateStateSchema } from "src/schemas/state/create-state-schema";

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

  async create(body: CreateStateSchema) {
    const data = await this.prisma.state.create({
      data: {
        name: body.name,
        acronym: body.acronym,
      },
    });

    return data;
  }

  async update(id: any, data: CreateStateSchema) {
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
