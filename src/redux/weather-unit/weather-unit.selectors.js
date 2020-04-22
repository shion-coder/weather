import { createSelector } from 'reselect';

/* -------------------------------------------------------------------------- */

const selectWeatherUnitSelector = state => state.weatherUnit;

export const selectUnit = createSelector([selectWeatherUnitSelector], weatherUnit => weatherUnit.unit);
