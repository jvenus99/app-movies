import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { MovieData } from '../models/movie';

@Injectable()
export class MoviesRepository {
  private readonly omdbApiKey: string = process.env.OMDB_API_KEY;

  async searchMovies(title: string): Promise<MovieData> {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?apikey=${this.omdbApiKey}&t=${title}`,
      );
      const movieData: MovieData = response.data;

      return movieData;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}
