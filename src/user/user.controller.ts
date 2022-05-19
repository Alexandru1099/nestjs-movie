import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) { }

  @Get(':id')
  public getUser(@Param('id') id: number): Promise<User> {
    return this.userService.getUser(id);
  }

  @Get(':email')
  public getUserByEmail(@Param('email') email: string): Promise<User> {
    return this.userService.getUserByEmail(email);
  }


  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<User> {
    return this.userService.createUser(body);
  }

  @Delete(':id')
  public deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }

  @Patch(':id/name')
  public updateUser(
    @Param('id') id: number,
    @Body('name') name: string,
  ): Promise<User> {
    return this.userService.updateUser(id, name);
  }
}
