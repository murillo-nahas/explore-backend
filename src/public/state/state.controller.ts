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
import { StateService } from "./state.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  CreateStateSchema,
  createStateBodySchema,
} from "src/schemas/state/create-state-schema";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@Controller("/state")
export class StateController {
  constructor(private service: StateService) {}

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
  @UsePipes(new ZodValidationPipe(createStateBodySchema))
  async create(@Body() body: CreateStateSchema) {
    return this.service.create(body);
  }

  @Put(":id")
  @UseGuards(JwtAuthGuard)
  async update(@Param("id") id: string, @Body() data: CreateStateSchema) {
    return this.service.update(id, data);
  }

  @Delete(":id")
  @UseGuards(JwtAuthGuard)
  @HttpCode(204)
  async delete(@Param("id") id: string) {
    return this.service.delete(id);
  }
}
