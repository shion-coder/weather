import { SEARCH_FETCH_TRIGGER, TOGGLE_DATA, CLEAR_SHOW, CLEAR_ERROR_MESSAGE } from './search-fetch.types';

/* -------------------------------------------------------------------------- */

/**
 * Trigger fetch
 * @param {String} input
 */
export const searchFetchTrigger = input => ({
  type: SEARCH_FETCH_TRIGGER,
  payload: input,
});

export const toggleData = () => ({
  type: TOGGLE_DATA,
});

export const clearShow = () => ({
  type: CLEAR_SHOW,
});

export const clearErrorMessage = () => ({
  type: CLEAR_ERROR_MESSAGE,
});
