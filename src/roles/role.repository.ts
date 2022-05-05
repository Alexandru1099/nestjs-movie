import { EntityRepository, Repository } from "typeorm";
import { CreateRolesDto } from "./roles.dto";
import { Roles } from "./roles.entity";

@EntityRepository()
export class RolesRepository extends Repository<Roles> {
    async createRole(body: CreateRolesDto): Promise<Roles> {
        const role: Roles = new Roles();
        role.name = body.name;
        await this.save(role);
        return role;
    }
}