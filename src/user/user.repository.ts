import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(body: CreateUserDto): Promise<void> {
    const { email, password } = body;
    const user = this.create({ email, password });
    await this.save(user);
  }
}
