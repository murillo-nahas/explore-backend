import { Controller } from "@nestjs/common";
import { LikeService } from "./like.service";

@Controller("/like")
export class LikeController {
  constructor(private service: LikeService) {}
}
