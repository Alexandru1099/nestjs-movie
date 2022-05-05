import { EntityRepository, Repository } from "typeorm";
import { CreateUserDto } from "./user.dto";
import { User } from "./user.entity"

@EntityRepository()
export class UsersRepository extends Repository<User> {
    async createUser(body: CreateUserDto): Promise<User> {
        const user: User = new User();

        user.name = body.name;
        user.email = body.email;

        await this.save(user);
        return user;
    }
}