"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const role_repository_1 = require("./role.repository");
const roles_entity_1 = require("./roles.entity");
let RolesService = class RolesService {
    async createRoles(body) {
        return this.rolesRepository.save(body);
    }
    async getRoles(id) {
        const found = this.rolesRepository.findOne(id);
        if (!found) {
            throw new common_1.NotFoundException(`This role with id "${id}" not found`);
        }
        return this.rolesRepository.findOne(id);
    }
    async deleteRoles(id) {
        const result = await this.rolesRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`This role with id "${id}" not found`);
        }
    }
    async updateRoles(id, name) {
        const role = await this.getRoles(id);
        role.name = name;
        await this.rolesRepository.save(role);
        return role;
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(roles_entity_1.Roles),
    __metadata("design:type", role_repository_1.RolesRepository)
], RolesService.prototype, "rolesRepository", void 0);
RolesService = __decorate([
    (0, common_1.Injectable)()
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map