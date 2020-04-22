import React, { Suspense, lazy } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAddressFetchLoading } from 'redux/address-fetch/address-fetch.selectors';
import { selectWeatherFetchLoading, selectWeatherFetchCurrent } from 'redux/weather-fetch/weather-fetch.selectors';
import { favoritesSelector } from 'redux/favorites/favorites.selectors';

import Loader from 'components/loader/loader.component';
import ErrorBoundary from 'containers/error-boundary/error-boundary.containers';
import AutoComplete from 'containers/auto-complete/auto-complete.container';
import Favorites from 'containers/favorites/favorites.container';

/* -------------------------------------------------------------------------- */

// Lazy
const Weather = lazy(() => import(/* webpackPrefetch: true */ 'containers/weather/weather.container'));

const Home = ({ addressLoading, weatherLoading, weatherCurrent, favorites }) => (
  <>
    <AutoComplete />

    {addressLoading || weatherLoading ? (
      <Loader text="Loading Data ..." />
    ) : (
      weatherCurrent && (
        <ErrorBoundary>
          <Suspense fallback={<Loader text="Loading Components ..." />}>
            <Weather />
          </Suspense>
        </ErrorBoundary>
      )
    )}

    {favorites && <Favorites />}
  </>
);

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  addressLoading: selectAddressFetchLoading,
  weatherLoading: selectWeatherFetchLoading,
  weatherCurrent: selectWeatherFetchCurrent,
  favorites: favoritesSelector,
});

Home.propTypes = {
  addressLoading: PropTypes.bool,
  weatherLoading: PropTypes.bool,
  weatherCurrent: PropTypes.object,
  favorites: PropTypes.array,
};

export default connect(mapStateToProps)(Home);
