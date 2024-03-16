import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PlaceService {
  constructor(private service: PrismaService) {}
}
