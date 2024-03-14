import { Module } from "@nestjs/common";
import { StateModule } from "./public/state/state.module";
import { PrismaService } from "./prisma/prisma.service";

@Module({
  imports: [StateModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
