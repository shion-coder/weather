import { createReducer } from 'redux/create-reducer';

import { TOGGLE_UNIT } from './weather-unit.types';

/* -------------------------------------------------------------------------- */

const initialState = {
  unit: 'C',
};

const reducer = {
  [TOGGLE_UNIT]: state => ({ ...state, unit: state.unit === 'C' ? 'F' : 'C' }),
};

export const weatherUnitReducer = createReducer(initialState, reducer);
