import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { JwtService } from "@nestjs/jwt";

@Controller("auth")
export class AuthController {
  constructor(private jwt: JwtService) {}
}
