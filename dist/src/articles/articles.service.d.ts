import { CreateArticlesDto } from './articles.dto';
import { Articles } from './article.entity';
export declare class ArticlesService {
    private readonly repository;
    getArticles(id: number): Promise<Articles>;
    createArticles(body: CreateArticlesDto): Promise<Articles>;
}
