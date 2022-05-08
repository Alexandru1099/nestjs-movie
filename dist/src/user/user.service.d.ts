import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UsersRepository } from './user.repository';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UsersRepository);
    getUser(id: number): Promise<User>;
    createUser(body: CreateUserDto): Promise<void>;
    deleteUser(id: number): Promise<void>;
    updateUser(id: number, name: string): Promise<User>;
}
