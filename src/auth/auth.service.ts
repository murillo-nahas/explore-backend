import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthenticateSchema } from "src/schemas/auth/authenticate-schema";
import { compare } from "bcryptjs";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwt: JwtService) {}

  async authenticate(body: AuthenticateSchema) {
    const { email, password } = body;

    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user)
      throw new UnauthorizedException("User credentials do not match.");

    const isPasswordValid = await compare(password, user.password);

    if (!isPasswordValid)
      throw new UnauthorizedException("User credentials do not match.");

    const accessToken = this.jwt.sign({ sub: user.id });

    return {
      access_token: accessToken,
    };
  }
}
