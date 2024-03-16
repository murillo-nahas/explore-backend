import { Module } from "@nestjs/common";
import { StateModule } from "./public/state/state.module";
import { PrismaService } from "./prisma/prisma.service";
import { CityModule } from "./public/city/city.module";
import { PlaceModule } from "./public/place/place.module";

@Module({
  imports: [StateModule, CityModule, PlaceModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
