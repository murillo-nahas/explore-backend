import { Controller } from "@nestjs/common";
import { BookmarkService } from "./bookmark.service";

@Controller("/bookmark")
export class BookmarkController {
  constructor(private service: BookmarkService) {}
}
