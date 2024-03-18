import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateCitySchema } from "src/schemas/city/create-city-schema";

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const cities = await this.prisma.city.findMany();

    return { cities };
  }

  async findOne(id: string) {
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
    const city = await this.prisma.city.create({
      data: {
        name: body.name,
        zipCode: body.zipCode,
        googleMapsUri: body.googleMapsUri,
        stateId: body.stateId,
      },
    });

    return { city };
  }

  async update(id: string, data: CreateCitySchema) {
    return await this.prisma.city.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.prisma.city.delete({
      where: {
        id,
      },
    });

    return;
  }
}
