import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
} from "@nestjs/common";
import { WaitlistService } from "./waitlist.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  JoinWaitlistSchema,
  joinWaitlistBodySchema,
} from "src/schemas/waitlist/join-waitlist-schema";

@Controller("/waitlist")
export class WaitlistController {
  constructor(private service: WaitlistService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(joinWaitlistBodySchema))
  async joinWaitlist(@Body() body: JoinWaitlistSchema) {
    return this.service.joinWaitlist(body);
  }

  @Get()
  async find() {
    return this.service.findAll();
  }
}
