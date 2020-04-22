import { createSelector } from 'reselect';

/* -------------------------------------------------------------------------- */

const selectSearchFetch = state => state.searchFetch;

export const selectSearchFetchLoading = createSelector([selectSearchFetch], searchFetch => searchFetch.loading);

export const selectSearchFetchShowCaret = createSelector([selectSearchFetch], searchFetch => searchFetch.showCaret);

export const selectSearchFetchShowData = createSelector([selectSearchFetch], searchFetch => searchFetch.showData);

export const selectSearchFetchData = createSelector([selectSearchFetch], searchFetch => searchFetch.data);

export const selectSearchFetchIsError = createSelector([selectSearchFetch], searchFetch => searchFetch.isError);

export const selectSearchFetchError = createSelector([selectSearchFetch], searchFetch => searchFetch.error);
