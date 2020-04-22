import { CORS_URL, WEATHER_API_URL, FETCH_TIMEOUT } from 'config/consts';

/* -------------------------------------------------------------------------- */

const API_KEY = process.env.REACT_APP_DARKSKY_API_KEY;

export const weatherApi = {
  method: 'GET',
  baseURL: `${CORS_URL}/${WEATHER_API_URL}/${API_KEY}`,
  timeout: FETCH_TIMEOUT,
  params: {
    extend: 'hourly',
    exclude: 'minutely,flags',
  },
};
