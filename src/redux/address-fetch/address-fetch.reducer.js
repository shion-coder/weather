import { createReducer } from 'redux/create-reducer';

import { ADDRESS_FETCH_REQUEST, ADDRESS_FETCH_SUCCESS, LOADING_OFF } from './address-fetch.types';

/* -------------------------------------------------------------------------- */

const initialState = {
  loading: false,
  data: {},
};

const reducer = {
  [ADDRESS_FETCH_REQUEST]: { loading: true, data: {} },
  [ADDRESS_FETCH_SUCCESS]: (state, { data }) => ({ loading: false, data }),
  [LOADING_OFF]: { loading: false },
};

export const addressFetchReducer = createReducer(initialState, reducer);
