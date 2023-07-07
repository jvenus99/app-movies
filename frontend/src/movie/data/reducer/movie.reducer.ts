import { Movie } from "../../domain/entities/movie";
import { MovieActionTypes, SET_MOVIE, CLEAR_STATE, START_LOADING, STOP_LOADING} from "../action/movie.action";

interface MovieState {
  movie: Movie | null;
  isLoading: boolean,
}

const initialState: MovieState = {
  movie: null,
  isLoading: false,
};

const movieReducer = (state = initialState, action: MovieActionTypes): MovieState => {
  switch (action.type) {
    case SET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    case CLEAR_STATE:
      return initialState;
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default movieReducer;