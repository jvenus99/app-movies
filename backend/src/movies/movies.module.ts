import { Module } from '@nestjs/common';
import { MoviesService } from './services/movies.service';
import { MoviesController } from './controllers/movies.controller';
import { MoviesRepository } from './repositories/movies.repository';
import { MovieConverter } from './models/movie';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService, MoviesRepository, MovieConverter],
})
export class MoviesModule {}
