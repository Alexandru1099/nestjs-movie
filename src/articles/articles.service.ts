import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticlesDto } from './articles.dto';
import { Articles } from './article.entity';
import { ArticlesRepository } from './articles.reposirory';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticlesRepository)
    private articleRepository: ArticlesRepository,
  ) {}

  public createArticles(body: CreateArticlesDto): Promise<Articles> {
    const articles: Articles = new Articles();
    articles.name = body.name;
    return this.articleRepository.save(articles);
  }

  public getArticles(id: number): Promise<Articles> {
    return this.articleRepository.findOne(id);
  }

  async deleteArticle(id: number): Promise<void> {
    const result = await this.articleRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`User with id "${id}" not found`);
    }
  }

  async updateArticle(id: number, name: string): Promise<Articles> {
    const article = await this.getArticles(id);
    article.name = name;
    await this.articleRepository.save(article);
    return article;
  }
}
