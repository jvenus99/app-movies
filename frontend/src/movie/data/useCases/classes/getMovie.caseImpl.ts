import { ApiPort } from "../../../../shared/data/ports/api.port"
import { Movie } from "../../../domain/entities/movie"
import { GetMovieCase, GetMovieCaseInput, GetMovieCaseOutput } from "../getMovie.case"

export type ApiCreatePostRequestBody = string

export type ApiCreatePostResponseBody = Promise<Movie>

export class GetMovieCaseImpl implements GetMovieCase {
  constructor(
    private readonly api: ApiPort<
      ApiCreatePostRequestBody,
      ApiCreatePostResponseBody
    >
  ) {}

  async execute(params: GetMovieCaseInput): GetMovieCaseOutput {
    try{
      const response = await this.api.request({
        urlPath: `/movies?title=${params}`,
        method: 'GET',
      })
      return response.body
    }catch(e){
      console.log(e)
      throw e
    }
  }

}

