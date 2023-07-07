import { Movie } from '../../domain/entities/movie'

import UseCase from '../../../shared/data/useCase/useCase'

export type GetMovieCaseInput = string

export type GetMovieCaseOutput = Promise<Movie>

export interface GetMovieCase extends UseCase<GetMovieCaseInput, GetMovieCaseOutput> {
  execute(params: GetMovieCaseInput): GetMovieCaseOutput
}
