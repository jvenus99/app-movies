import { Test } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { MoviesRepository } from '../repositories/movies.repository';
import { MovieDto } from '../view/movie.dto';
import { MovieConverter } from '../models/movie';

describe('MoviesService', () => {
  let moviesService: MoviesService;
  let moviesRepository: MoviesRepository;
  let movieConverter: MovieConverter;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [MoviesService, MoviesRepository, MovieConverter],
    }).compile();

    moviesService = moduleRef.get<MoviesService>(MoviesService);
    moviesRepository = moduleRef.get<MoviesRepository>(MoviesRepository);
    movieConverter = moduleRef.get<MovieConverter>(MovieConverter);
  });

  describe('searchMovies', () => {
    it('should return a MovieDto object when search is successful', async () => {
      const title = 'The Matrix';
      const movieData = {
        Title: 'The Matrix',
        Year: '1999',
        Rated: 'R',
        Released: '31 Mar 1999',
        Runtime: '136 min',
        Genre: 'Action, Sci-Fi',
        Director: 'Lana Wachowski, Lilly Wachowski',
        Writer: 'Lilly Wachowski, Lana Wachowski',
        Actors:
          'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
        Plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        Language: 'English',
        Country: 'USA',
        Awards: 'Won 4 Oscars. Another 37 wins & 51 nominations.',
        Poster:
          'https://m.media-amazon.com/images/M/MV5BMTYwOTQxMjkwN15BMl5BanBnXkFtZTYwNzYxMzg3._V1_SX300.jpg',
        Ratings: [
          {
            Source: 'Internet Movie Database',
            Value: '8.7/10',
          },
          {
            Source: 'Rotten Tomatoes',
            Value: '88%',
          },
          {
            Source: 'Metacritic',
            Value: '73/100',
          },
        ],
        Metascore: '73',
        imdbRating: '8.7',
        imdbVotes: '1,719,757',
        imdbID: 'tt0133093',
        Type: 'movie',
        DVD: '21 Sep 1999',
        BoxOffice: '$171,479,930',
        Production: 'Village Roadshow Prod., Silver Pictures',
        Website: 'N/A',
        Response: 'True',
      };
      const movieDto: MovieDto = {
        title: 'The Matrix',
        year: '1999',
        plot: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        actors:
          'Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving',
        poster:
          'https://m.media-amazon.com/images/M/MV5BMTYwOTQxMjkwN15BMl5BanBnXkFtZTYwNzYxMzg3._V1_SX300.jpg',
        ratings: [
          {
            source: 'Internet Movie Database',
            value: '8.7/10',
          },
          {
            source: 'Rotten Tomatoes',
            value: '88%',
          },
          {
            source: 'Metacritic',
            value: '73/100',
          },
        ],
      };

      jest.spyOn(moviesRepository, 'searchMovies').mockResolvedValue(movieData);
      jest.spyOn(movieConverter, 'convertToDto').mockReturnValue(movieDto);

      const result = await moviesService.searchMovies(title);

      expect(moviesRepository.searchMovies).toHaveBeenCalledWith(title);
      expect(movieConverter.convertToDto).toHaveBeenCalledWith(movieData);
      expect(result).toEqual(movieDto);
    });

    it('should throw an error when search fails', async () => {
      const title = 'InvalidMovieTitle';
      const errorMessage = 'Failed to search movies';

      jest
        .spyOn(moviesRepository, 'searchMovies')
        .mockRejectedValue(new Error(errorMessage));

      await expect(moviesService.searchMovies(title)).rejects.toThrowError(
        errorMessage,
      );
      expect(moviesRepository.searchMovies).toHaveBeenCalledWith(title);
    });
  });
});
