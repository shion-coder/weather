import axios from 'axios';
import axiosRetry from 'axios-retry';

import { teleportApi } from './teleport.api';
import { weatherApi } from './weather.api';

/* -------------------------------------------------------------------------- */

// Exponential back-off retry delay between requests
axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

export const makeCityRequest = async input => {
  const { data } = await axios({
    ...teleportApi,
    baseURL: `${teleportApi.baseURL}/`,
    params: {
      search: input,
    },
  });

  return data;
};

export const makeAddressRequest = async input => {
  const { data } = await axios({
    ...teleportApi,
    baseURL: `${teleportApi.baseURL}/${input}`,
  });

  return data;
};

export const makeWeatherRequest = async input => {
  const { data } = await axios({
    ...weatherApi,
    baseURL: `${weatherApi.baseURL}/${input}`,
  });

  return data;
};
