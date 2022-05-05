import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
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
  ) {}

  @Get(':id')
  public getArticle(@Param('id', ParseIntPipe) id: number): Promise<Articles> {
    return this.articleService.getArticles(id);
  }

  @Post()
  public createArticle(@Body() body: CreateArticlesDto): Promise<Articles> {
    return this.articleService.createArticles(body);
  }

  @Delete(':id')
  public deleteArticle(@Param('id') id: number): Promise<void> {
    return this.articleService.deleteArticle(id);
  }

  @Patch(':id/name')
  public updateArticle(
    @Param('id') id: number,
    @Body('name') name: string,
  ): Promise<Articles> {
    return this.articleService.updateArticle(id, name);
  }
}
