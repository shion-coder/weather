import { takeLatest, all, call, put, cancelled } from 'redux-saga/effects';

import { CancelToken } from 'axios';

import { makeCityRequest } from 'api/api';

import { dataExtract } from './search-fetch.utils';

import {
  SEARCH_FETCH_TRIGGER,
  SEARCH_FETCH_REQUEST,
  SEARCH_FETCH_SUCCESS,
  SEARCH_FETCH_FAILURE,
  CLEAR_SHOW,
} from './search-fetch.types';

/* -------------------------------------------------------------------------- */

/**
 * Start fetching
 * @param {String} input
 */
const fetchStart = function*({ payload }) {
  if (!payload.trim()) {
    yield put({ type: CLEAR_SHOW });
    return;
  }

  // Axios request cancel
  const source = CancelToken.source();

  yield put({ type: SEARCH_FETCH_REQUEST });

  try {
    const data = yield call(makeCityRequest, payload);
    const results = dataExtract(data);

    yield put({ type: SEARCH_FETCH_SUCCESS, payload: { ...results } });
  } catch (error) {
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
  yield takeLatest(SEARCH_FETCH_TRIGGER, fetchStart);
};

/* -------------------------------------------------------------------------- */

export const searchFetchSaga = function*() {
  yield all([call(getFetchTrigger)]);
};
