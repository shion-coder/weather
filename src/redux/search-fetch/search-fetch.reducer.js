import { createReducer } from 'redux/create-reducer';

import {
  SEARCH_FETCH_REQUEST,
  SEARCH_FETCH_SUCCESS,
  SEARCH_FETCH_FAILURE,
  TOGGLE_DATA,
  CLEAR_SHOW,
  CLEAR_ERROR_MESSAGE,
} from './search-fetch.types';

/* -------------------------------------------------------------------------- */

const initialState = {
  loading: false,
  showCaret: false,
  showData: false,
  data: [],
  isError: false,
  error: {},
};

const reducer = {
  [SEARCH_FETCH_REQUEST]: state => ({
    ...state,
    loading: true,
    showCaret: false,
    showData: false,
    data: [],
    isError: false,
    error: {},
  }),
  [SEARCH_FETCH_SUCCESS]: (state, { showCaret, showData, data, isError = false, error = {} }) => ({
    ...state,
    loading: false,
    showCaret,
    showData,
    data,
    isError,
    error,
  }),
  [SEARCH_FETCH_FAILURE]: (state, payload) => ({ ...state, loading: false, isError: true, error: payload }),
  [TOGGLE_DATA]: state => ({ ...state, showData: !state.showData }),
  [CLEAR_SHOW]: state => ({ ...state, showCaret: false, showData: false }),
  [CLEAR_ERROR_MESSAGE]: state => ({ ...state, isError: false }),
};

export const searchFetchReducer = createReducer(initialState, reducer);
