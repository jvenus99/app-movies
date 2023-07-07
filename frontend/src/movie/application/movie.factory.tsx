import React from "react";
import ApiAdapter from "../../shared/infra/api.adapter";
import { GetMovieCaseImpl } from "../data/useCases/classes/getMovie.caseImpl";
import { Movie } from "../domain/entities/movie";
import MoviePage from "../presentantion/components/movie.page";

export default class MovieFactory extends React.Component {
    render(){
      const apiAdapter = new ApiAdapter<string,Promise<Movie>>(new URL('http://localhost:3000'));
      const getMovieCase = new GetMovieCaseImpl(apiAdapter);
      return (
        <MoviePage getMovieCase={getMovieCase}/>
      )
    }
}