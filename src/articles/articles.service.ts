import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticlesDto } from './articles.dto';
import { Articles } from './article.entity';

@Injectable()
export class ArticlesService {
  @InjectRepository(Articles)
  private readonly repository: Repository<Articles>;

  public getArticles(id: number): Promise<Articles> {
    return this.repository.findOne(id);
  }

  public createArticles(body: CreateArticlesDto): Promise<Articles> {
    const articles: Articles = new Articles();

    articles.name = body.name;

    return this.repository.save(articles);
  }
}
