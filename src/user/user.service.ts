import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async getUser(id: number): Promise<User> {
    const found = this.userRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }
    return found;
  }

  async createUser(body: CreateUserDto): Promise<User> {
    return this.userRepository
      .create({
        name: 'alex',
        email: body.email,
        password: body.password,
      })
      .save();
  }

  // public createUser(body: CreateUserDto): Promise<User> {
  //   const user: User = new User();
  //   user.name = 'alex';
  //   user.email = body.email;
  //   user.password = body.password;
  //   return this.userRepository.save(user);
  // }

  async deleteUser(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }
  }

  async updateUser(id: number, name: string): Promise<User> {
    const user = await this.getUser(id);
    user.name = name;
    await this.userRepository.save(user);
    return user;
  }
}
