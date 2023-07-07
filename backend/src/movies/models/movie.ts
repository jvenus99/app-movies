import { Injectable } from '@nestjs/common';
import { MovieDto } from '../view/movie.dto';

export type MovieData = {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
};

@Injectable()
class MovieConverter {
  public convertToDto(movieData: MovieData): MovieDto {
    return {
      title: movieData.Title,
      year: movieData.Year,
      plot: movieData.Plot,
      actors: movieData.Actors,
      poster: movieData.Poster,
      ratings: movieData.Ratings.map((rating) => ({
        source: rating.Source,
        value: rating.Value,
      })),
    };
  }
}

export { MovieConverter };
