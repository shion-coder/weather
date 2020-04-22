import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeColor } from 'redux/theme/theme.selectors';
import {
  selectSearchFetchLoading,
  selectSearchFetchShowData,
  selectSearchFetchData,
  selectSearchFetchIsError,
} from 'redux/search-fetch/search-fetch.selectors';

import Loader from 'components/loader/loader.component';
import Search from 'components/search/search.component';
import SearchResult from 'components/search-result/search-result.component';
import Error from 'components/error/error.component';

import { AutoCompleteContainer, SearchResults } from './auto-complete.styles';

/* -------------------------------------------------------------------------- */

const AutoComplete = ({ theme, loading, showData, data, isError }) => (
  <AutoCompleteContainer>
    <Search />

    {loading ? (
      <Loader text="Searching City ..." />
    ) : isError ? (
      <Error />
    ) : (
      showData && (
        <SearchResults color={theme}>
          {data.map((result, index) => (
            <SearchResult key={index} {...result} />
          ))}
        </SearchResults>
      )
    )}
  </AutoCompleteContainer>
);

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  theme: selectThemeColor,
  loading: selectSearchFetchLoading,
  showData: selectSearchFetchShowData,
  data: selectSearchFetchData,
  isError: selectSearchFetchIsError,
});

AutoComplete.propTypes = {
  theme: PropTypes.string,
  loading: PropTypes.bool,
  showData: PropTypes.bool,
  data: PropTypes.array,
  isError: PropTypes.bool,
};

export default connect(mapStateToProps)(AutoComplete);
