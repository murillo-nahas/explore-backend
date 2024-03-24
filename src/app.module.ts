import { Module } from "@nestjs/common";
import { StateModule } from "./public/state/state.module";
import { PrismaService } from "./prisma/prisma.service";
import { CityModule } from "./public/city/city.module";
import { PlaceModule } from "./public/place/place.module";
import { CategoryModule } from "./public/category/category.module";
import { WaitlistModule } from "./public/waitlist/waitlist.module";
import { AuthModule } from "./auth/auth.module";
import { UserModule } from "./public/user/user.module";
import { BookmarkModule } from "./public/bookmark/bookmark.module";
import { LikeModule } from "./public/like/like.module";
import { ReviewModule } from "./public/review/review.module";

@Module({
  imports: [
    StateModule,
    CityModule,
    PlaceModule,
    CategoryModule,
    WaitlistModule,
    AuthModule,
    UserModule,
    BookmarkModule,
    LikeModule,
    ReviewModule,
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
