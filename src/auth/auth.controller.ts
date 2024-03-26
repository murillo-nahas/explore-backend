import { Body, Controller, Post, UsePipes } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { ZodValidationPipe } from "src/pipes/zod-validation.pipe";
import {
  AuthenticateSchema,
  authenticateBodySchema,
} from "src/schemas/auth/authenticate-schema";
import { AuthService } from "./auth.service";

@Controller("/sessions")
export class AuthController {
  constructor(private service: AuthService, private jwt: JwtService) {}

  @Post("/login")
  @UsePipes(new ZodValidationPipe(authenticateBodySchema))
  async auth(@Body() body: AuthenticateSchema) {
    return await this.service.authenticate(body);
  }
}
