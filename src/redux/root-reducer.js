import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { dimensionsReducer } from 'redux/dimensions/dimensions.reducer';
import { themeReducer } from 'redux/theme/theme.reducer.js';
import { searchReducer } from 'redux/search/search.reducer';
import { searchFetchReducer } from 'redux/search-fetch/search-fetch.reducer';
import { addressFetchReducer } from 'redux/address-fetch/address-fetch.reducer';
import { weatherFetchReducer } from 'redux/weather-fetch/weather-fetch.reducer';
import { weatherUnitReducer } from 'redux/weather-unit/weather-unit.reducer';
import { favoritesReducer } from 'redux/favorites/favorites.reducer';

/* -------------------------------------------------------------------------- */

// Persist middleware config
const persistConfig = {
  storage,
  key: 'root',
  whitelist: ['theme', 'weatherUnit', 'favorites'],
};

const reducer = combineReducers({
  dimensions: dimensionsReducer,
  theme: themeReducer,
  search: searchReducer,
  searchFetch: searchFetchReducer,
  addressFetch: addressFetchReducer,
  weatherFetch: weatherFetchReducer,
  weatherUnit: weatherUnitReducer,
  favorites: favoritesReducer,
});

export const rootReducer = persistReducer(persistConfig, reducer);
