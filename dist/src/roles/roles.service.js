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
const typeorm_2 = require("typeorm");
const roles_entity_1 = require("./roles.entity");
let RolesService = class RolesService {
    getRoles(id) {
        return this.repository.findOne(id);
    }
    createRoles(body) {
        const roles = new roles_entity_1.Roles();
        roles.name = body.name;
        return this.repository.save(roles);
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(roles_entity_1.Roles),
    __metadata("design:type", typeorm_2.Repository)
], RolesService.prototype, "repository", void 0);
RolesService = __decorate([
    (0, common_1.Injectable)()
], RolesService);
exports.RolesService = RolesService;
//# sourceMappingURL=roles.service.js.map