import { CreateRolesDto } from "./roles.dto";
import { Roles } from "./roles.entity";
export declare class RolesService {
    private readonly repository;
    getRoles(id: number): Promise<Roles>;
    createRoles(body: CreateRolesDto): Promise<Roles>;
}
