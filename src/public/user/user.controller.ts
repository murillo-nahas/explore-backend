import { Body, Controller, HttpCode, Post, UsePipes } from "@nestjs/common";
import { UserService } from "./user.service";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  CreateUserSchema,
  createUserBodySchema,
} from "src/schemas/user/create-user-schema";

@Controller("/user")
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(createUserBodySchema))
  async create(@Body() body: CreateUserSchema) {
    return this.service.create(body);
  }
}
