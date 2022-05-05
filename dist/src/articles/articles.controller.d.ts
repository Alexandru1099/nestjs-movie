import { CreateArticlesDto } from './articles.dto';
import { Articles } from './article.entity';
import { ArticlesService } from './articles.service';
export declare class ArticlesController {
    private articleService;
    private readonly service;
    constructor(articleService: ArticlesService, service: ArticlesService);
    getArticle(id: number): Promise<Articles>;
    createArticle(body: CreateArticlesDto): Promise<Articles>;
}
