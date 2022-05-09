import { CreateUserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    private readonly service;
    constructor(userService: UserService, service: UserService);
    getUser(id: number): Promise<User>;
    createUser(body: CreateUserDto): Promise<User>;
    deleteUser(id: number): Promise<void>;
    updateUser(id: number, name: string): Promise<User>;
}
