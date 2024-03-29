import {
  BadRequestException,
  HttpException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { CreateMoviesDto } from './dto/movie.dto';
import { Movie } from './movie.entity';
import { Connection, Repository } from 'typeorm';
import { Like } from 'typeorm';
import { GetMovieFilterDto } from './dto/get-movie-filters.dto';
import { from, Observable, takeLast } from 'rxjs';
import { Http2ServerResponse } from 'http2';

@Injectable()
export class MovieService {
  constructor(
    @InjectConnection()
    private readonly connection: Connection,
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async createMovies(body: CreateMoviesDto): Promise<Movie> {
    return this.movieRepository.save({
      title: body.title,
      context: body.context,
      user: {
        id: body.user_id,
      },
      photo: body.photo,
      runtime: body.runtime,
      release: body.release,
      starring: body.starring,
      content: body.content,
    } as any);
  }
  async getAllMovies() {
    // const filterArticle = await this.movieRepository
    //   .createQueryBuilder()
    //   .select()
    //   .from(Users, 'users')
    //   .addFrom(Role, 'role')
    //   .andWhere('users.rol_id = role.id')
    //   .getMany();
    // return filterArticle;
    // return this.connection.query(
    //   'SELECT * FROM article art INNER JOIN users usr ON art.user_id = usr.id INNER JOIN role rl ON rl.id = usr.rol_id; ',
    // );
    return this.connection.query('SELECT * FROM movie');
  }

  async getMovieWithFilters(filterDto: GetMovieFilterDto): Promise<Movie[]> {
    const { search } = filterDto;
    let movie = await this.getAllMovies();
    if (search) {
      movie = movie.find((movie) => {
        if (movie.title.toLowerCase().includes(search)) {
          return true;
        }
        return false;
      });
    }
    if (movie === undefined) {
      throw new HttpException('No movies', 200);
    }
    return movie;
  }

  async getMovie(id: number): Promise<Movie> {
    const found = await this.movieRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`This role with id "${id}" not found`);
    }
    return found;
  }

  async deleteMovie(id: number): Promise<void> {
    const result = await this.movieRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Movie with id "${id}" not found`);
    }
  }

  async updateMovie(id: number, title: string): Promise<Movie> {
    const movie = await this.getMovie(id);
    movie.title = title;
    await this.movieRepository.save(movie);
    return movie;
  }
}
