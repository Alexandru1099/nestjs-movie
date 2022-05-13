import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRolesDto } from './roles.dto';
import { Roles } from './roles.entity';

@Injectable()
export class RolesService {
  @InjectRepository(Roles)
  private readonly rolesRepository: Repository<Roles>;

  async createRoles(body: CreateRolesDto): Promise<Roles> {
    return this.rolesRepository.save({
      name: body.name,
    });
  }

  async getRoles(id: number): Promise<Roles> {
    const found = await this.rolesRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`This role with id "${id}" not found`);
    }
    return this.rolesRepository.findOne(id);
  }

  async deleteRoles(id: number): Promise<void> {
    const result = await this.rolesRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`This role with id "${id}" not found`);
    }
  }

  async updateRoles(id: number, name: string): Promise<Roles> {
    const role = await this.getRoles(id);
    role.name = name;
    await this.rolesRepository.save(role);
    return role;
  }
}
