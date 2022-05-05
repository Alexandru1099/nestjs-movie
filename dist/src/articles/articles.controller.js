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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticlesController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const articles_dto_1 = require("./articles.dto");
const articles_service_1 = require("./articles.service");
let ArticlesController = class ArticlesController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    getArticle(id) {
        return this.articleService.getArticles(id);
    }
    createArticle(body) {
        return this.articleService.createArticles(body);
    }
    deleteArticle(id) {
        return this.articleService.deleteArticle(id);
    }
    updateArticle(id, name) {
        return this.articleService.updateArticle(id, name);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    openapi.ApiResponse({ status: 200, type: require("./article.entity").Articles }),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "getArticle", null);
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201, type: require("./article.entity").Articles }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [articles_dto_1.CreateArticlesDto]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "createArticle", null);
__decorate([
    (0, common_1.Delete)(':id'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "deleteArticle", null);
__decorate([
    (0, common_1.Patch)(':id/name'),
    openapi.ApiResponse({ status: 200, type: require("./article.entity").Articles }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], ArticlesController.prototype, "updateArticle", null);
ArticlesController = __decorate([
    (0, common_1.Controller)('article'),
    __param(0, (0, typeorm_1.InjectRepository)(articles_service_1.ArticlesService)),
    __metadata("design:paramtypes", [articles_service_1.ArticlesService])
], ArticlesController);
exports.ArticlesController = ArticlesController;
//# sourceMappingURL=articles.controller.js.map