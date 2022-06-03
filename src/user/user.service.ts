import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from 'src/roles/roles.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { Users } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly userRepository: Repository<Users>,
  ) {}

  async getUser(id: number): Promise<Users> {
    const found = this.userRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }
    return found;
  }

  async getUserByEmail(email: string): Promise<Users> {
    const found = this.userRepository.findOne({ email });
    if (!found) {
      throw new NotFoundException(`User with id "${email}" not found`);
    }
    return found;
  }

  async createUser(body: CreateUserDto): Promise<Users> {
    const name = 'alex';
    return this.userRepository.save({
      name,
      email: body.email,
      password: body.password,
      age: body.age,
      gender: body.gender,
    });
  }

  async deleteUser(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }
  }

  async updateUser(id: number, name: string): Promise<Users> {
    const user = await this.getUser(id);
    user.name = name;
    await this.userRepository.save(user);
    return user;
  }
}
