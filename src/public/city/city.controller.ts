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
import { CityService } from "./city.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  CreateCitySchema,
  createCityBodySchema,
} from "src/schemas/city/create-city-schema";

@Controller("/city")
export class CityController {
  constructor(private service: CityService) {}

  @Get()
  async find() {
    return this.service.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.service.findOne(id);
  }

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createCityBodySchema))
  async create(@Body() body: CreateCitySchema) {
    return this.service.create(body);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: CreateCitySchema) {
    return this.service.update(id, data);
  }

  @Delete(":id")
  @HttpCode(204)
  async delete(@Param("id") id: string) {
    return this.service.delete(id);
  }
}
