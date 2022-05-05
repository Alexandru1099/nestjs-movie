import { CreateRolesDto } from './roles.dto';
import { Roles } from './roles.entity';
export declare class RolesService {
    private rolesRepository;
    createRoles(body: CreateRolesDto): Promise<Roles>;
    getRoles(id: number): Promise<Roles>;
    deleteRoles(id: number): Promise<void>;
    updateRoles(id: number, name: string): Promise<Roles>;
}
