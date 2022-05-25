import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticlesDto } from './articles.dto';
import { Article } from './article.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  async createArticles(body: CreateArticlesDto): Promise<Article> {
    return this.articleRepository.save({
      name: body.name,
      title: body.title,
      context: body.context,
    });
  }

  async getArticles(id: number): Promise<Article> {
    const found = await this.articleRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`This role with id "${id}" not found`);
    }
    return found;
  }

  async deleteArticle(id: number): Promise<void> {
    const result = await this.articleRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Aticle with id "${id}" not found`);
    }
  }

  async updateArticle(id: number, name: string): Promise<Article> {
    const article = await this.getArticles(id);
    article.name = name;
    await this.articleRepository.save(article);
    return article;
  }
}
