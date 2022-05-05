import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateArticlesDto } from './articles.dto';
import { Articles } from './article.entity';
import { ArticlesService } from './articles.service';

@Controller('article')
export class ArticlesController {
  constructor(
    @InjectRepository(ArticlesService)
    private articleService: ArticlesService,
    private readonly service: ArticlesService,
  ) {}

  @Get(':id')
  public getArticle(@Param('id', ParseIntPipe) id: number): Promise<Articles> {
    return this.service.getArticles(id);
  }

  @Post()
  public createArticle(@Body() body: CreateArticlesDto): Promise<Articles> {
    return this.service.createArticles(body);
  }
}
