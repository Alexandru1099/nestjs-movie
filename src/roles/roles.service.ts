import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRolesDto } from "./roles.dto";
import { Roles } from "./roles.entity";

@Injectable()
export class RolesService {
  @InjectRepository(Roles)
  private readonly repository: Repository<Roles>;

  public getRoles(id: number): Promise<Roles> {
    return this.repository.findOne(id);
  }

  public createRoles(body: CreateRolesDto): Promise<Roles> {
    const roles: Roles = new Roles();

    roles.name = body.name;

    return this.repository.save(roles);
  }
}
