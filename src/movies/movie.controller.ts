import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { GetMovieFilterDto } from './dto/get-movie-filters.dto';
import { CreateMoviesDto } from './dto/movie.dto';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';

@Controller('movie')
export class MoviesController {
  constructor(private movieService: MovieService) {}

  @Get(':id')
  async getMovie(@Param('id') id: number): Promise<Movie> {
    return this.movieService.getMovie(id);
  }

  @Get()
  async getMovies(@Query() filterDto: GetMovieFilterDto): Promise<Movie[]> {
    console.log(Object.keys(filterDto).length);
    if (Object.keys(filterDto).length){
      return this.movieService.getMovieWithFilters(filterDto);
    } else {
      return this.movieService.getAllMovies();
    }
  }

  @Get()
  async getMoviessByName(@Param('name') name: string): Promise<Movie[]> {
    return this.movieService.getMoviesByName(name);
  }

  @Post()
  async createMovie(@Body() body: CreateMoviesDto): Promise<Movie> {
    return this.movieService.createMovies(body);
  }

  @Delete(':id')
  async deleteMovie(@Param('id') id: number): Promise<void> {
    return this.movieService.deleteMovie(id);
  }

  @Patch(':id/name')
  async updateMovie(
    @Param('id') id: number,
    @Body('name') name: string,
  ): Promise<Movie> {
    return this.movieService.updateMovie(id, name);
  }
}
