import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  UnprocessableEntityException,
} from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCitySchema } from "src/schemas/city/create-city-schema";

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const cities = await this.prisma.city.findMany();

    if (!cities) throw new BadRequestException();

    return { cities };
  }

  async findOne(id: number) {
    const city = await this.prisma.city.findUnique({
      where: {
        id,
      },
    });

    if (!city) throw new NotFoundException("Cannot find city.");

    return {
      city,
    };
  }

  async create(body: CreateCitySchema) {
    const data = await this.prisma.city.create({
      data: {
        name: body.name,
        acronym: body.acronym,
        zipCode: body.zipCode,
        stateId: body.stateId,
      },
    });

    return { data };
  }

  async update(id: number, data: CreateCitySchema) {
    return this.prisma.city.update({ where: { id }, data });
  }

  async delete(id: number) {
    const deleteById = this.prisma.city.delete({
      where: {
        id: id,
      },
    });

    if (!deleteById) throw new NotFoundException("Cannot find city.");

    return {};
  }
}
