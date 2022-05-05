import { CreateRolesDto } from "./roles.dto";
import { Roles } from "./roles.entity";
import { RolesService } from "./roles.service";
export declare class RolesController {
    private userService;
    private readonly service;
    constructor(userService: RolesService, service: RolesService);
    getUser(id: number): Promise<Roles>;
    createUser(body: CreateRolesDto): Promise<Roles>;
}
