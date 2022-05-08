import { CreateRolesDto } from './roles.dto';
import { Roles } from './roles.entity';
import { RolesService } from './roles.service';
export declare class RolesController {
    private roleService;
    constructor(roleService: RolesService);
    getRole(id: number): Promise<Roles>;
    createRole(body: CreateRolesDto): Promise<Roles>;
    deleteRole(id: number): Promise<void>;
    updateName(id: number, name: string): Promise<Roles>;
}
