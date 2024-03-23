import { Module } from "@nestjs/common";
import { StateModule } from "./public/state/state.module";
import { PrismaService } from "./prisma/prisma.service";
import { CityModule } from "./public/city/city.module";
import { PlaceModule } from "./public/place/place.module";
import { CategoryModule } from "./public/category/category.module";
import { WaitlistModule } from "./public/waitlist/waitlist.module";
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    StateModule,
    CityModule,
    PlaceModule,
    CategoryModule,
    WaitlistModule,
    AuthModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
