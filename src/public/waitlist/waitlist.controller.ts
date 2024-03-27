import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
  UsePipes,
} from "@nestjs/common";
import { WaitlistService } from "./waitlist.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  JoinWaitlistSchema,
  joinWaitlistBodySchema,
} from "src/schemas/waitlist/join-waitlist-schema";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

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
  @UseGuards(JwtAuthGuard)
  async find() {
    return this.service.findAll();
  }
}
