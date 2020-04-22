import { takeLatest, all, call, put, cancelled } from 'redux-saga/effects';

import { CancelToken } from 'axios';

import { makeAddressRequest } from 'api/api';

import { dataExtract } from './address-fetch.utils';

import {
  ADDRESS_FETCH_TRIGGER,
  ADDRESS_FETCH_REQUEST,
  ADDRESS_FETCH_SUCCESS,
  LOADING_OFF,
} from './address-fetch.types';
import { SEARCH_FETCH_FAILURE } from 'redux/search-fetch/search-fetch.types';

/* -------------------------------------------------------------------------- */

/**
 * Start fetching
 * @param {String} input
 */
const fetchStart = function*({ payload }) {
  if (!payload.trim()) return;

  // Axios request cancel
  const source = CancelToken.source();

  yield put({ type: ADDRESS_FETCH_REQUEST });

  try {
    const data = yield call(makeAddressRequest, payload);
    const results = dataExtract(data);

    yield put({ type: ADDRESS_FETCH_SUCCESS, payload: { ...results } });
  } catch (error) {
    yield put({ type: LOADING_OFF });

    if (error.response) {
      // The request was made and the server responded with a status code
      yield put({ type: SEARCH_FETCH_FAILURE, payload: { ...error, message: 'Response Error !' } });
    } else if (error.request) {
      // The request was made but no response was received
      error.code === 'ECONNABORTED'
        ? yield put({ type: SEARCH_FETCH_FAILURE, payload: { ...error, message: 'Network Timeout !' } })
        : yield put({ type: SEARCH_FETCH_FAILURE, payload: { ...error, message: 'Network Error !' } });
    } else {
      // Something happened in setting up the request that triggered an Error
      yield put({ type: SEARCH_FETCH_FAILURE, payload: { ...error, message: 'Error!' } });
    }
  } finally {
    if (yield cancelled()) {
      source.cancel();
    }
  }
};

const getFetchTrigger = function*() {
  yield takeLatest(ADDRESS_FETCH_TRIGGER, fetchStart);
};

/* -------------------------------------------------------------------------- */

export const addressFetchSaga = function*() {
  yield all([call(getFetchTrigger)]);
};
