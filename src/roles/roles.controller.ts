import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateRolesDto } from "./roles.dto";
import { Roles } from "./roles.entity";
import { RolesService } from "./roles.service";

@Controller("role")
export class RolesController {
  constructor(
    @InjectRepository(RolesService)
    private roleService: RolesService,
  ) {}

  @Get(":id")
  public getRole(@Param("id", ParseIntPipe) id: number): Promise<Roles> {
    return this.roleService.getRoles(id);
  }

  @Post()
  public createRole(@Body() body: CreateRolesDto): Promise<Roles> {
    return this.roleService.createRoles(body);
  }

  @Delete(':id')
  public deleteRole(@Param('id') id: number): Promise<void> {
    return this.roleService.deleteRoles(id);
  }

  @Patch(':id/name')
  public updateName(
    @Param('id') id: number,
    @Body('name') name: string,
  ): Promise<Roles> {
    return this.roleService.updateRoles(id, name);
  }
}
