import { Injectable } from "@nestjs/common";

@Injectable()
export class StateService {
  async getState() {
    return await "Getting a state";
  }
}
