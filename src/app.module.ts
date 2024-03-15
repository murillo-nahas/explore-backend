import { Module } from "@nestjs/common";
import { StateModule } from "./public/state/state.module";
import { PrismaService } from "./prisma/prisma.service";
import { CityModule } from "./public/city/city.module";

@Module({
  imports: [StateModule, CityModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
