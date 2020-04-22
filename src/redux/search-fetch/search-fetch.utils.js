import { isEmpty, isUndefined } from 'lodash-es';

/* -------------------------------------------------------------------------- */

/**
 * Extract data from response
 * @param {Object} data
 */
export const dataExtract = data => {
  if (!isEmpty(data) && !isUndefined(data) && data.count > 0) {
    const results = data._embedded['city:search-results'].map(result => ({
      name: result.matching_full_name,
      id: result._links['city:item'].href.split('/')[5],
    }));

    return { data: results, showCaret: true, showData: true };
  } else {
    return {
      showCaret: false,
      showData: false,
      isError: true,
      error: { message: 'No matching results found. Try searching with a valid name !' },
    };
  }
};
