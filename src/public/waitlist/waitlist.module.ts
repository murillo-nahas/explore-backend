import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { WaitlistService } from "./waitlist.service";
import { WaitlistController } from "./waitlist.controller";

@Module({
  controllers: [WaitlistController],
  providers: [WaitlistService, PrismaService],
})
export class WaitlistModule {}
