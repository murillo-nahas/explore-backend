import { ConflictException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserSchema } from "src/schemas/user/create-user-schema";

import { hash } from "bcryptjs";

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(body: CreateUserSchema) {
    const { password } = body;

    const hashedPassword = await hash(password, 8);

    const existingUser = await this.prisma.user.findFirst({
      where: {
        email: body.email,
      },
      select: {
        id: true,
      },
    });

    if (existingUser) {
      throw new ConflictException("User already exists");
    }

    return await this.prisma.user.create({
      data: {
        email: body.email,
        firstname: body.firstname,
        username: body.username,
        password: hashedPassword,
        bio: body.bio,
        avatar: body.avatar,
      },
    });
  }
}
