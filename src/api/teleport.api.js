import { TELEPORT_API_URL, FETCH_TIMEOUT } from 'config/consts';

/* -------------------------------------------------------------------------- */

export const teleportApi = {
  method: 'GET',
  baseURL: TELEPORT_API_URL,
  timeout: FETCH_TIMEOUT,
};
