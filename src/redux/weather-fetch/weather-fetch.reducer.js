import { createReducer } from 'redux/create-reducer';

import { WEATHER_FETCH_REQUEST, WEATHER_FETCH_SUCCESS, LOADING_OFF } from './weather-fetch.types';

/* -------------------------------------------------------------------------- */

const initialState = {
  loading: false,
  data: {},
};

const reducer = {
  [WEATHER_FETCH_REQUEST]: state => ({ ...state, loading: true, data: {} }),
  [WEATHER_FETCH_SUCCESS]: (state, { data }) => ({ ...state, loading: false, data }),
  [LOADING_OFF]: state => ({ ...state, loading: false }),
};

export const weatherFetchReducer = createReducer(initialState, reducer);
