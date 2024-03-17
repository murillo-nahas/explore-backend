import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
} from "@nestjs/common";
import { PlaceService } from "./place.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  CreatePlaceSchema,
  createPlaceBodySchema,
} from "src/schemas/place/create-place-schema";

@Controller("/place")
export class PlaceController {
  constructor(private service: PlaceService) {}

  @Get()
  async find() {
    return this.service.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.service.findOne(Number(id));
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createPlaceBodySchema))
  async create(@Body() body: CreatePlaceSchema) {
    return this.service.create(body);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: CreatePlaceSchema) {
    return this.service.update(Number(id), data);
  }

  @Delete(":id")
  @HttpCode(204)
  async delete(@Param("id") id: string) {
    return this.service.delete(Number(id));
  }
}