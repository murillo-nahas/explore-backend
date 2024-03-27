import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
} from "@nestjs/common";
import { CityService } from "./city.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  CreateCitySchema,
  createCityBodySchema,
} from "src/schemas/city/create-city-schema";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

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
  @UseGuards(JwtAuthGuard)
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createCityBodySchema))
  async create(@Body() body: CreateCitySchema) {
    return this.service.create(body);
  }

  @Put(":id")
  @UseGuards(JwtAuthGuard)
  async update(@Param("id") id: string, @Body() data: CreateCitySchema) {
    return this.service.update(id, data);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  async delete(@Param("id") id: string) {
    return this.service.delete(id);
  }
}
