import { EntityRepository, Repository } from "typeorm";
import { Articles } from "./article.entity";
import { CreateArticlesDto } from "./articles.dto";

@EntityRepository()
export class ArticlesRepository extends Repository<Articles> {
    async createArticle(body: CreateArticlesDto): Promise<Articles> {
        const article: Articles = new Articles();
        article.name = body.name;
        await this.save(article);
        return article;
    }
}