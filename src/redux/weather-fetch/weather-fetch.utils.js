import { isEmpty, isUndefined } from 'lodash-es';

import { formatTime } from 'utils/weather/format-time';

/* -------------------------------------------------------------------------- */

/**
 * Extract data from response
 * @param {Object} data
 */
export const dataExtract = data => {
  if (!isEmpty(data) && !isUndefined(data)) {
    const { timezone } = data;

    const weatherCurrent = {
      timezone,
      ...data.currently,
      sunrise: data.daily.data[0].sunriseTime,
      sunset: data.daily.data[0].sunsetTime,
    };

    // Group 168 hours into days as keys in timeFrames, group days and timeFrames into weatherForecast
    const timeFrames = {};

    // Create date as the keys for timeFrame in timeFrames. Ex: timeFrames: {'02/28/2020': [{...timeFrame},...], ...}
    data.hourly.data.forEach(hour => {
      const date = formatTime(hour.time, timezone, 'MM/DD/YYYY');

      if (Object.keys(timeFrames).includes(date)) {
        timeFrames[date].push({ timezone, ...hour });
      } else {
        timeFrames[date] = [{ timezone, ...hour }];
      }
    });

    const days = {};

    // Create date as the keys for the day in days. Ex: days: {'02/28/2020': {...day}, ...}
    data.daily.data.forEach(day => {
      const date = formatTime(day.time, timezone, 'MM/DD/YYYY');

      // Since there will be unique day objects in days, just create a 'date' key with day object as value for as many days
      days[date] = { timezone, ...day };
    });

    const weatherForecast = { timeFrames, days };

    return { data: { weatherCurrent, weatherForecast } };
  } else {
    return {
      isError: true,
      error: { message: 'No matching results found. Try searching with a valid name !' },
    };
  }
};
