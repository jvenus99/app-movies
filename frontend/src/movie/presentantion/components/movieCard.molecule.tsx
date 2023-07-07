import React from "react";
import ButtonAtom from "../../../shared/presentation/components/button.atom";
import TextAtom from "../../../shared/presentation/components/text.atom";
import StarRating from "./starRating.atom";
import "./movieCard.molecule.scss";
import { useSelector } from "react-redux";
import { Movie } from "../../domain/entities/movie";
import { RootState } from "../../../shared/data/store/combineReducers";

type MovieStateType = {
  movie: Movie|null,
  isLoading: boolean,
}

const MovieCardMolecule: React.FC = () => {
  const movieState = useSelector<RootState, MovieStateType>((state) => state.movieState);
  const { movie, isLoading } = movieState;

  return (
    <>
      {movie ?
        (
          <div className="movie-card">
          <div className="movie-info">
            <div className="div-title-plot">
              <TextAtom size="Large" bold>{movie.title}</TextAtom>
              <TextAtom size="Medium">{movie.plot}</TextAtom>
            </div>
            <div className="div-info">
              <TextAtom size="Medium" bold>Actors</TextAtom>
              <TextAtom size="Medium">{movie.actors}</TextAtom>
            </div>
            <div className="div-info">
              <TextAtom size="Medium" bold>Review</TextAtom>
              <StarRating ratings={movie.ratings}/>
            </div>
            <ButtonAtom design="Default" icon="heart">Favorite</ButtonAtom>
          </div>
          <img src={movie.poster} alt={movie.title} />
        </div>
        ):
        (
          <div className="movie-card-empty">
            <TextAtom size="Medium" bold>{isLoading ? 'Loading...' : 'Please search a movie...'}</TextAtom>
          </div>
        )
      }
    </>
  );
};

export default MovieCardMolecule;