import { createSelector } from 'reselect';

/* -------------------------------------------------------------------------- */

const addressSelector = state => state.addressFetch;

export const selectAddressFetchLoading = createSelector([addressSelector], addressFetch => addressFetch.loading);

export const selectAddressFetchData = createSelector([addressSelector], addressFetch => addressFetch.data);

export const selectAddress = createSelector([selectAddressFetchData], data => data.address);

export const selectLatlong = createSelector([selectAddressFetchData], data => data.latlong);
