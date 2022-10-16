import { Test } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';

const dto = {
  name: 'ceva',
  title: 'titlu',
  context: 'context',
  userId: '03d63156-0b36-4002-b198-1ecd83f4e432',
};
const mockMovieService = {
  createMovies: jest.fn().mockResolvedValue({
    id: 'alex are mere',
    ...dto,
  }),
  findOne: jest.fn().mockResolvedValue({
    id: 1,
    ...dto,
  }),
  getMovie: jest.fn().mockResolvedValue({
    id: 1,
    ...dto,
  }),
  save: jest.fn().mockResolvedValue({
    id: 1,
    ...dto,
  }),
  deleteMovie: jest.fn().mockResolvedValue({
    id: 1,
    ...dto,
  }),
};

describe('MovieService', function () {
  beforeEach(async function () {
    const module = Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(MovieService),
          useValue: {
            createMovie: jest.fn(() => mockMovieService.createMovies),
          },
        },
      ],
    }).compile();
  });
  it('should be defined', () => {
    expect(mockMovieService).toBeDefined();
  });

  it('should create a new Movie', async () => {
    expect(await mockMovieService.createMovies(dto)).toEqual({
      id: 'alex are mere',
      ...dto,
    });
    expect(mockMovieService.createMovies).toHaveBeenCalledWith(dto);
  });

  it('should be get Movie by id', async () => {
    expect(await mockMovieService.getMovie(1)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockMovieService.getMovie).toHaveBeenCalledWith(1);
  });

  it('should be update Movie', async () => {
    expect(await mockMovieService.save(1, dto.name)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockMovieService.save).toHaveBeenCalledWith(1, dto.name);
  });

  it('should be delete Movie by id', async () => {
    expect(await mockMovieService.deleteMovie(1)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockMovieService.deleteMovie).toHaveBeenCalledWith(1);
  });
});
