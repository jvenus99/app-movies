import { Movie } from "../../domain/entities/movie";

export const SET_MOVIE = "SET_MOVIE";
export const CLEAR_STATE = 'CLEAR_STATE';
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';

interface SetMovieAction {
  type: typeof SET_MOVIE;
  payload: Movie | null;
}

interface ClearMovieAction {
  type: typeof CLEAR_STATE;
}

interface StartLoadingAction {
  type: typeof START_LOADING;
}

interface StopLoadingAction {
  type: typeof STOP_LOADING;
}

export type MovieActionTypes = SetMovieAction | ClearMovieAction | StartLoadingAction | StopLoadingAction;

export const setMovie = (movie: Movie | null): SetMovieAction => ({
  type: SET_MOVIE,
  payload: movie,
});

export const clearState = () => ({
  type: CLEAR_STATE,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});