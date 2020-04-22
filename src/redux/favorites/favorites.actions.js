import { TOGGLE_FAVORITE } from './favorites.types';

/* -------------------------------------------------------------------------- */

export const toggleFavorite = value => ({
  type: TOGGLE_FAVORITE,
  payload: value,
});
