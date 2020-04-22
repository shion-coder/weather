import { takeLatest, all, call, put, cancelled } from 'redux-saga/effects';

import { CancelToken } from 'axios';

import { makeWeatherRequest } from 'api/api';

import { dataExtract } from './weather-fetch.utils';

import { WEATHER_FETCH_REQUEST, WEATHER_FETCH_SUCCESS, LOADING_OFF } from './weather-fetch.types';
import { SEARCH_FETCH_FAILURE } from 'redux/search-fetch/search-fetch.types';
import { ADDRESS_FETCH_SUCCESS } from 'redux/address-fetch/address-fetch.types';

/* -------------------------------------------------------------------------- */

/**
 * Start fetching
 * @param {String} latlong
 */
const fetchStart = function*({
  payload: {
    data: { latlong },
  },
}) {
  if (!latlong.trim()) return;

  // Axios request cancel
  const source = CancelToken.source();

  yield put({ type: WEATHER_FETCH_REQUEST });

  try {
    const data = yield call(makeWeatherRequest, latlong);
    const results = dataExtract(data);

    yield put({ type: WEATHER_FETCH_SUCCESS, payload: { ...results } });
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
  yield takeLatest(ADDRESS_FETCH_SUCCESS, fetchStart);
};

/* -------------------------------------------------------------------------- */

export const weatherFetchSaga = function*() {
  yield all([call(getFetchTrigger)]);
};
