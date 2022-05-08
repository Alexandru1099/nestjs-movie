import { CreateArticlesDto } from './articles.dto';
import { Articles } from './article.entity';
import { ArticlesRepository } from './articles.reposirory';
export declare class ArticlesService {
    private articleRepository;
    constructor(articleRepository: ArticlesRepository);
    createArticles(body: CreateArticlesDto): Promise<Articles>;
    getArticles(id: number): Promise<Articles>;
    deleteArticle(id: number): Promise<void>;
    updateArticle(id: number, name: string): Promise<Articles>;
}
