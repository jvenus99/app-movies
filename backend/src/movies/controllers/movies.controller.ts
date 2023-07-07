import {
  Controller,
  Get,
  Query,
  HttpStatus,
  HttpException,
} from '@nestjs/common';
import { MoviesService } from '../services/movies.service';
import { MovieDto } from '../view/movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  async searchMovies(@Query('title') title: string): Promise<MovieDto> {
    try {
      const movies = await this.moviesService.searchMovies(title);
      return movies;
    } catch (error) {
      throw new HttpException(
        'Error to search movies',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
