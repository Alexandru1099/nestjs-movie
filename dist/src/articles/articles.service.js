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
exports.ArticlesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const article_entity_1 = require("./article.entity");
const articles_reposirory_1 = require("./articles.reposirory");
let ArticlesService = class ArticlesService {
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    createArticles(body) {
        const articles = new article_entity_1.Articles();
        articles.name = body.name;
        return this.articleRepository.save(articles);
    }
    getArticles(id) {
        return this.articleRepository.findOne(id);
    }
    async deleteArticle(id) {
        const result = await this.articleRepository.delete(id);
        if (result.affected === 0) {
            throw new common_1.NotFoundException(`User with id "${id}" not found`);
        }
    }
    async updateArticle(id, name) {
        const article = await this.getArticles(id);
        article.name = name;
        await this.articleRepository.save(article);
        return article;
    }
};
ArticlesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(articles_reposirory_1.ArticlesRepository)),
    __metadata("design:paramtypes", [articles_reposirory_1.ArticlesRepository])
], ArticlesService);
exports.ArticlesService = ArticlesService;
//# sourceMappingURL=articles.service.js.map