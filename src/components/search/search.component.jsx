import React, { useCallback } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeColor } from 'redux/theme/theme.selectors';
import { selectSearchInput } from 'redux/search/search.selectors';
import { selectSearchFetchShowCaret, selectSearchFetchShowData } from 'redux/search-fetch/search-fetch.selectors';
import { onSearchChange } from 'redux/search/search.actions';
import { searchFetchTrigger, toggleData } from 'redux/search-fetch/search-fetch.actions';

import { debounce } from 'lodash-es';

import IconSearchbar from 'components/icon/icon-searchbar/icon-searchbar.component';

import { SearchContainer, IconContainer, Input, CaretContainer } from './search.styles.js';

/* -------------------------------------------------------------------------- */

const Search = ({ theme, input, showCaret, showData, onSearchChange, searchFetchTrigger, toggleData }) => {
  const debounceFetch = useCallback(
    debounce(value => searchFetchTrigger(value), 1000),
    [],
  );

  const onChange = ({ target: { value } }) => {
    onSearchChange(value);
    debounceFetch(value);
  };

  return (
    <SearchContainer>
      <IconContainer>
        <IconSearchbar type="search" color={theme} />
      </IconContainer>

      <Input
        type="text"
        placeholder="Type city name to find weather forecast ..."
        value={input}
        onChange={onChange}
        color={theme}
        showData={showData}
      />

      {showCaret && (
        <CaretContainer onClick={toggleData}>
          {showData ? <IconSearchbar type="up" color={theme} /> : <IconSearchbar type="down" color={theme} />}
        </CaretContainer>
      )}
    </SearchContainer>
  );
};

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  theme: selectThemeColor,
  input: selectSearchInput,
  showCaret: selectSearchFetchShowCaret,
  showData: selectSearchFetchShowData,
});

Search.propTypes = {
  theme: PropTypes.string,
  input: PropTypes.string,
  showCaret: PropTypes.bool,
  showData: PropTypes.bool,
  onSearchChange: PropTypes.func,
  searchFetchTrigger: PropTypes.func,
  toggleData: PropTypes.func,
};

export default connect(mapStateToProps, { onSearchChange, searchFetchTrigger, toggleData })(Search);
