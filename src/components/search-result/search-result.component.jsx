import React from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeColor } from 'redux/theme/theme.selectors';
import { onSearchChange } from 'redux/search/search.actions';
import { toggleData } from 'redux/search-fetch/search-fetch.actions';
import { addressFetchTriger } from 'redux/address-fetch/address-fetch.actions';

import { SearchResultContainer } from './search-result.styles';

/* -------------------------------------------------------------------------- */

const SearchResult = ({ theme, name, id, onSearchChange, toggleData, addressFetchTriger }) => {
  const handleClick = () => {
    const input = name.split(',')[0];

    onSearchChange(input);
    toggleData();
    addressFetchTriger(id);
  };

  return (
    <SearchResultContainer color={theme} onClick={handleClick}>
      {name}
    </SearchResultContainer>
  );
};

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  theme: selectThemeColor,
});

SearchResult.propTypes = {
  theme: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  onSearchChange: PropTypes.func,
  toggleData: PropTypes.func,
  addressFetchTriger: PropTypes.func,
};

export default connect(mapStateToProps, { onSearchChange, toggleData, addressFetchTriger })(SearchResult);
