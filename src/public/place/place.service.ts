import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePlaceSchema } from "src/schemas/place/create-place-schema";

@Injectable()
export class PlaceService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const places = await this.prisma.place.findMany();

    return {
      places,
    };
  }

  async findOne(id: number) {
    const place = await this.prisma.place.findUnique({
      where: {
        id,
      },
    });

    if (!place) throw new NotFoundException("Cannot find place.");

    return {
      place,
    };
  }

  async create(body: CreatePlaceSchema) {
    const place = await this.prisma.place.create({
      data: {
        name: body.name,
        description: body.description,
        googleMapsUrl: body.googleMapsUrl,
        street: body.street,
        number: body.number,
        district: body.district,
        zipCode: body.zipCode,
        cityId: body.cityId,
      },
    });

    return place;
  }

  async update(id: number, data: CreatePlaceSchema) {
    return await this.prisma.place.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.prisma.place.delete({
      where: {
        id,
      },
    });

    return;
  }
}
