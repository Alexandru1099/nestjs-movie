import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRolesDto } from './roles.dto';
import { Roles } from './roles.entity';
import { RolesService } from './roles.service';

@Controller('role')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @Get(':id')
  async getRole(@Param('id', ParseIntPipe) id: number): Promise<Roles> {
    return await this.roleService.getRoles(id);
  }

  @Post()
  async createRole(@Body() body: CreateRolesDto): Promise<Roles> {
    return await this.roleService.createRoles(body);
  }

  @Delete(':id')
  async deleteRole(@Param('id') id: number): Promise<void> {
    return await this.roleService.deleteRoles(id);
  }

  @Patch(':id/name')
  async updateName(
    @Param('id') id: number,
    @Body('name') name: string,
  ): Promise<Roles> {
    return await this.roleService.updateRoles(id, name);
  }
}
