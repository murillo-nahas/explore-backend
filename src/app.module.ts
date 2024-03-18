import { Module } from "@nestjs/common";
import { StateModule } from "./public/state/state.module";
import { PrismaService } from "./prisma/prisma.service";
import { CityModule } from "./public/city/city.module";
import { PlaceModule } from "./public/place/place.module";
import { CategoryModule } from "./public/category/category.module";

@Module({
  imports: [StateModule, CityModule, PlaceModule, CategoryModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
