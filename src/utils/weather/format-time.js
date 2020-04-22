import moment from 'moment-timezone';

/* -------------------------------------------------------------------------- */

/**
 * @param {Number} timestamp
 * @param {String} timezone
 */
export const formatTime = (timestamp, timezone, formatType) => {
  return moment.tz(timestamp * 1000, timezone).format(formatType);
};
