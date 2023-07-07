import { Injectable } from '@nestjs/common';
import { MoviesRepository } from '../repositories/movies.repository';
import { MovieDto } from '../view/movie.dto';
import { MovieConverter } from '../models/movie';

@Injectable()
export class MoviesService {
  constructor(
    private readonly moviesRepository: MoviesRepository,
    private readonly movieConverter: MovieConverter,
  ) {}

  async searchMovies(title: string): Promise<MovieDto> {
    try {
      const movie = await this.moviesRepository.searchMovies(title);
      return this.movieConverter.convertToDto(movie);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
