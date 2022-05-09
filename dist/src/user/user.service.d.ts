import { Repository } from 'typeorm';
import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getUser(id: number): Promise<User>;
    createUser(body: CreateUserDto): Promise<User>;
    deleteUser(id: number): Promise<void>;
    updateUser(id: number, name: string): Promise<User>;
}
