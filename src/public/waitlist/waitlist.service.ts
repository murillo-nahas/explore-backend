import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { JoinWaitlistSchema } from "src/schemas/waitlist/join-waitlist-schema";

@Injectable()
export class WaitlistService {
  constructor(private prisma: PrismaService) {}

  async joinWaitlist(body: JoinWaitlistSchema) {
    const waitlister = await this.prisma.waitlister.create({
      data: {
        email: body.email,
        firstname: body.firstname,
      },
    });

    return {
      waitlister,
    };
  }

  async findAll() {
    const waitlisters = await this.prisma.waitlister.findMany();

    return {
      waitlisters,
    };
  }
}
