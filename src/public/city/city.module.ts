import { Module } from "@nestjs/common";
import { CityController } from "./city.controller";
import { CityService } from "./city.service";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [CityController],
  providers: [CityService, PrismaService],
})
export class CityModule {}
