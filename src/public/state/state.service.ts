import {
  BadRequestException,
  Body,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class StateService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const states = await this.prisma.state.findMany();

    if (!states) throw new NotFoundException();

    return { states };
  }

  async findById(id: number) {
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
    return "Hello World";
  }

  async update() {
    return "Hello World";
  }

  async delete() {
    return "Hello World";
  }
}
