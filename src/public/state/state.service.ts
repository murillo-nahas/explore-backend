import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateStateSchema } from "src/schemas/state/create-state-schema";

@Injectable()
export class StateService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const states = await this.prisma.state.findMany();

    return { states };
  }

  async findOne(id: string) {
    const state = await this.prisma.state.findUnique({
      where: {
        id,
      },
    });

    if (!state) throw new NotFoundException("Cannot find state.");

    return {
      state,
    };
  }

  async create(body: CreateStateSchema) {
    const state = await this.prisma.state.create({
      data: {
        name: body.name,
        country: body.country,
        acronym: body.acronym,
      },
    });

    return state;
  }

  async update(id: string, data: CreateStateSchema) {
    return await this.prisma.state.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.prisma.state.delete({
      where: {
        id,
      },
    });

    return;
  }
}
