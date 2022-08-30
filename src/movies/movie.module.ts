import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movie.controller';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), ConfigModule],
  controllers: [MoviesController],
  providers: [MovieService],
  exports: [MovieService],
})
export default class MoviesModule {}
