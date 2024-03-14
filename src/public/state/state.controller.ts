import { Controller, Get, Param, Post } from "@nestjs/common";
import { StateService } from "./state.service";

@Controller("/state")
export class StateController {
  constructor(private stateService: StateService) {}

  @Get()
  async find() {
    return this.stateService.findAll();
  }

  @Get("/:id")
  async findById(@Param("id") id: number) {
    return this.stateService.findById(id);
  }

  @Post()
}
