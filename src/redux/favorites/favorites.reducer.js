import { createReducer } from 'redux/create-reducer';

import { TOGGLE_FAVORITE } from './favorites.types';
import { handleFavorite } from './favorites.utils';

/* -------------------------------------------------------------------------- */

const initialState = [];

const reducer = {
  [TOGGLE_FAVORITE]: (state, payload) => handleFavorite(state, payload),
};

export const favoritesReducer = createReducer(initialState, reducer);
