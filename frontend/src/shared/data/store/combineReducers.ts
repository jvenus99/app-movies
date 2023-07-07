import { combineReducers } from 'redux';

import movieReducer from '../../../movie/data/reducer/movie.reducer';

const rootReducer = combineReducers({
  movieState: movieReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;