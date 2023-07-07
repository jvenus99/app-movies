import axios from 'axios';
import { MoviesRepository } from './movies.repository';

describe('MoviesRepository', () => {
  let moviesRepository: MoviesRepository;

  beforeEach(() => {
    moviesRepository = new MoviesRepository();
  });

  describe('searchMovies', () => {
    it('should return movie data for a valid title', async () => {
      const title = 'The Avengers';

      const movieData = {
        Title: 'The Avengers',
        Year: '2012',
        Genre: 'Action, Adventure, Sci-Fi',
      };

      jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: movieData });

      const result = await moviesRepository.searchMovies(title);

      expect(result).toEqual(movieData);
      expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(title));
    });

    it('should throw an error for an invalid title', async () => {
      const title = 'InvalidMovieTitle';

      jest
        .spyOn(axios, 'get')
        .mockRejectedValueOnce(new Error('Erro ao buscar filmes'));

      await expect(moviesRepository.searchMovies(title)).rejects.toThrowError(
        'Erro ao buscar filmes',
      );
      expect(axios.get).toHaveBeenCalledWith(expect.stringContaining(title));
    });
  });
});
