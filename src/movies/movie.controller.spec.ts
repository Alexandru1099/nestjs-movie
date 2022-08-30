import { MoviesController } from './movie.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { MovieService } from './movie.service';

let movieController: MoviesController;
const createMovieMock = jest.fn();

describe('MovieController', function () {
  const dto = {
    name: 'ceva',
    title: 'titlu',
    context: 'context',
    userId: '03d63156-0b36-4002-b198-1ecd83f4e432',
  };
  const mockMovieService = {
    createMovies: createMovieMock.mockResolvedValue({
      id: 'alex are mere',
      ...dto,
    }),
    updateMovie: jest.fn().mockResolvedValue({
      id: 1,
      ...dto,
    }),
    getMovie: jest.fn().mockResolvedValue({
      id: 1,
      ...dto,
    }),
    deleteMovie: jest.fn().mockResolvedValue({
      id: 1,
      ...dto,
    }),
  };
  beforeEach(async function () {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieService],
      controllers: [MoviesController],
    })
      .overrideProvider(MovieService)
      .useValue(mockMovieService)
      .compile();
    movieController = (await module).get(MoviesController);
  });

  it('should be defined', () => {
    expect(movieController).toBeDefined();
  });
  it('should be create a article', async () => {
    expect(await movieController.createMovie(dto)).toEqual({
      id: 'alex are mere',
      ...dto,
    });
    expect(mockMovieService.createMovies).toHaveBeenCalledWith(dto);
  });

  it('should be update article', async () => {
    expect(await movieController.updateMovie(1, dto.name)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockMovieService.updateMovie).toHaveBeenCalledWith(1, dto.name);
  });

  it('should be get Movie by id', async () => {
    expect(await movieController.getMovie(1)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockMovieService.getMovie).toHaveBeenCalledWith(1);
  });

  it('should be delete Movie by id', async () => {
    expect(await movieController.deleteMovie(1)).toEqual({
      id: 1,
      ...dto,
    });
    expect(mockMovieService.deleteMovie).toHaveBeenCalledWith(1);
  });
});
