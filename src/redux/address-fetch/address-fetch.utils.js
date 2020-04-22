import { isEmpty, isUndefined } from 'lodash-es';

/* -------------------------------------------------------------------------- */

/**
 * Extract data from response
 * @param {Object} data
 */
export const dataExtract = data => {
  if (!isEmpty(data) && !isUndefined(data)) {
    const { latitude, longitude } = data.location.latlon;
    const { name } = data;
    const fullName = data.full_name;
    const geoId = data.geoname_id;

    return { data: { address: { name, fullName, geoId }, latlong: `${latitude},${longitude}` } };
  } else {
    return {
      isError: true,
      error: { message: 'No matching results found. Try searching with a valid name !' },
    };
  }
};
