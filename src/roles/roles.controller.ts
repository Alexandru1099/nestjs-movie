import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRolesDto } from "./roles.dto";
import { Roles } from "./roles.entity";
import { RolesService } from "./roles.service";

@Controller("user")
export class RolesController {
  constructor(
    @InjectRepository(RolesService)
    private userService: RolesService,
    private readonly service: RolesService
  ) {}

  @Get(":id")
  public getUser(@Param("id", ParseIntPipe) id: number): Promise<Roles> {
    return this.service.getRoles(id);
  }

  @Post()
  public createUser(@Body() body: CreateRolesDto): Promise<Roles> {
    return this.service.createRoles(body);
  }
}
