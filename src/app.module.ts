import { Module } from "@nestjs/common";
import { StateModule } from "./public/state/state.module";

@Module({
  imports: [StateModule],
  controllers: [],
})
export class AppModule {}
