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

  async findOne(id: string) {
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
        overview: body.overview,
        googleMapsUri: body.googleMapsUri,
        street: body.street,
        number: body.number,
        district: body.district,
        zipCode: body.zipCode,
        cityId: body.cityId,
        categoryId: body.categoryId,
      },
    });

    return place;
  }

  async update(id: string, data: CreatePlaceSchema) {
    return await this.prisma.place.update({ where: { id }, data });
  }

  async delete(id: string) {
    await this.prisma.place.delete({
      where: {
        id,
      },
    });

    return;
  }
}
