import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { takeLast } from 'rxjs';
import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public getUser(id: number): Promise<User> {
    return this.repository.findOne(id);
  }

  public createUser(body: CreateUserDto): Promise<User> {
    const user: User = new User();

    user.name = body.name;
    user.email = body.email;

    return this.repository.save(user);
  }

  public deleteUser(id: number): void {
    this.user = this.user.filter((user) => user.id !== id);
  }

  public updateUser(id: number, name: string) {
    const user = this.getUser(id);
    user.name = name;
    return user;
  }
}
