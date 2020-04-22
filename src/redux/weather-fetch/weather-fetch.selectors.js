import { createSelector } from 'reselect';

/* -------------------------------------------------------------------------- */

const selectWeatherFetch = state => state.weatherFetch;

const selectWeatherFetchData = createSelector([selectWeatherFetch], weatherFetch => weatherFetch.data);

export const selectWeatherFetchLoading = createSelector([selectWeatherFetch], weatherFetch => weatherFetch.loading);

export const selectWeatherFetchCurrent = createSelector([selectWeatherFetchData], data => data.weatherCurrent);

export const selectWeatherFetchForecast = createSelector([selectWeatherFetchData], data => data.weatherForecast);
