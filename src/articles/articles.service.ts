import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { CreateArticlesDto } from './articles.dto';
import { Article } from './article.entity';
import { Connection, Repository } from 'typeorm';
import { Role } from 'src/roles/roles.entity';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
    @InjectRepository(Article)
    private articleRepository: Repository<Article>,
  ) {}

  async createArticles(body: CreateArticlesDto): Promise<Article> {
    return this.articleRepository.save({
      name: body.name,
      title: body.title,
      context: body.context,
      user: {
        id: body.userId,
      },
    } as any);
  }
  async getAllArticle() {
    // this.articleRepository.find({
    //   relations: ['users'],
    //   where: {
    //     id: Role.id,
    //   },
    // });
    return this.connection.query(
      'SELECT * FROM article art INNER JOIN users usr ON art.user_id = usr.id INNER JOIN role rl ON rl.id = usr.rol_id; ',
    );
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
