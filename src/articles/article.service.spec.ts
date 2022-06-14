import { ModuleRef } from '@nestjs/core';
import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Article } from './article.entity';
import { ArticlesService } from './articles.service';

const dto = {
  name: 'ceva',
  title: 'titlu',
  context: 'context',
  userId: '03d63156-0b36-4002-b198-1ecd83f4e432',
};
const mockArticleService = {
  createArticles: jest.fn().mockResolvedValue({
    id: 'alex are mere',
    ...dto,
  }),
  // save: jest
  //   .fn()
  //   .mockImplementation((article) => Promise.resolve({ id: 1, ...article })),
  // getAllArticle: jest.fn(),
  // findOne: jest.fn(),
};

describe('ArticleService', function () {
  
  let articleService: ArticlesService;
  beforeEach(async function () {
    const module = Test.createTestingModule({
      providers: [
        ArticlesService,
        {
          provide: getRepositoryToken(ArticlesService),
          useValue:{
            createArticle: jest.fn(() => mockArticleService.createArticles),
          },
        },
      ],
    }).compile();
    articleService =  (await module).get(ArticlesService);
  });
  it('should be defined', () => {
    expect(articleService).toBeDefined();
  });
  // it('should create a new article', async () => {
  //   const dto = {
  //     name: 'ceva',
  //     title: 'titlu',
  //     context: 'context',
  //     userId: '03d63156-0b36-4002-b198-1ecd83f4e432',
  //   };
  //   expect(await articleService.createArticles(dto)).toEqual({
  //     id: expect.any(Number),
  //     name: dto.name,
  //     title: dto.title,
  //     context: dto.context,
  //     userId: dto.userId,
  //   });
  // });
});

// describe('getArticles', function () {
//   let articleService: ArticlesService;
//   it('calls articleService.getArticle', async function () {
//     expect(articleService.getAllArticle).not.toHaveBeenCalled();
//     const result = await articleService.getAllArticle();
//     expect(result).toEqual(result);
//   });
// });

// describe('getArticleById', function () {
//   it('calls articleservice.findOne', async function () {
//     const mockArticle = {
//       id: '1',
//       title: 'titlul',
//       context: 'context',
//     };
//     mockArticleService.findOne.mockReturnValue({});
//   });
// });
