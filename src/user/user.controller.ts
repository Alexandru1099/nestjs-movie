import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(
    @InjectRepository(UserService)
    private userService: UserService,
    private readonly service: UserService,
  ) {}

  @Get(':id')
  public getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.service.getUser(id);
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.service.createUser(body);
  }

  @Delete(':id')
  public deleteUser(@Param('id') id: number): void {
    return this.userService.deleteUser(id);
  }

  @Patch(':id/name')
  updateName(
    @Param('id') id: number,
    @Body('name') name: string,
    ): User {
    return this.userService.updateName(id, name);
  }

}
