import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { StateService } from "./state.service";

@Controller("/state")
export class StateController {
  constructor(private stateService: StateService) {}

  @Get()
  async find() {
    return this.stateService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.stateService.findOne(Number(id));
  }

  @Post()
  @HttpCode(201)
  async create(@Body() body: any) {
    return this.stateService.create(body);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data: any) {
    return this.stateService.update(Number(id), data);
  }

  @Delete(":id")
  @HttpCode(204)
  async delete(@Param("id") id: string) {
    return this.stateService.delete(Number(id));
  }
}
