import {
  Body,
  Controller,
  HttpCode,
  Post,
  UseGuards,
  UsePipes,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  CreateUserSchema,
  createUserBodySchema,
} from "src/schemas/user/create-user-schema";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";

@Controller("/user")
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createUserBodySchema))
  async create(@Body() body: CreateUserSchema) {
    return this.service.create(body);
  }
}
