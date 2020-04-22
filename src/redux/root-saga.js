import { all, call } from 'redux-saga/effects';

import { searchFetchSaga } from 'redux/search-fetch/search-fetch.sagas';
import { addressFetchSaga } from 'redux/address-fetch/address-fetch.sagas';
import { weatherFetchSaga } from 'redux/weather-fetch/weather-fetch.sagas';

/* -------------------------------------------------------------------------- */

export const rootSaga = function*() {
  yield all([call(searchFetchSaga), call(addressFetchSaga), call(weatherFetchSaga)]);
};
