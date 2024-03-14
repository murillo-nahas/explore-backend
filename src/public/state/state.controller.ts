import { Controller, Get } from "@nestjs/common";
import { StateService } from "./state.service";

@Controller("/state")
export class StateController {
  constructor(private stateService: StateService) {}

  @Get()
  async getState() {
    return this.stateService.getState();
  }
}
