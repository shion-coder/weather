import { ADDRESS_FETCH_TRIGGER } from './address-fetch.types';

/* -------------------------------------------------------------------------- */

/**
 * Trigger fetch
 * @param {String} input
 */
export const addressFetchTriger = input => ({
  type: ADDRESS_FETCH_TRIGGER,
  payload: input,
});
