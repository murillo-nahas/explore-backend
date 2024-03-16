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
import { StateService } from "./state.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  CreateStateSchema,
  createStateBodySchema,
} from "src/schemas/state/create-state-schema";

@Controller("/state")
export class StateController {
  constructor(private service: StateService) {}

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
  @UsePipes(new ZodValidationPipe(createStateBodySchema))
  async create(@Body() body: CreateStateSchema) {
    return this.service.create(body);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: CreateStateSchema) {
    return this.service.update(Number(id), data);
  }

  @Delete(":id")
  @HttpCode(204)
  async delete(@Param("id") id: string) {
    return this.service.delete(Number(id));
  }
}
