import { CreateArticlesDto } from './articles.dto';
import { Articles } from './article.entity';
import { ArticlesService } from './articles.service';
export declare class ArticlesController {
    private articleService;
    constructor(articleService: ArticlesService);
    getArticle(id: number): Promise<Articles>;
    createArticle(body: CreateArticlesDto): Promise<Articles>;
    deleteArticle(id: number): Promise<void>;
    updateArticle(id: number, name: string): Promise<Articles>;
}
