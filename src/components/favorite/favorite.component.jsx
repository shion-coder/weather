import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeColor } from 'redux/theme/theme.selectors';

import { Wrapper, FavoriteContainer } from './favorite.styles';

/* -------------------------------------------------------------------------- */

const Favorite = ({ favorite: { name, fullName, latlong }, theme, dispatch }) => {
  const handleClick = () =>
    dispatch({ type: 'ADDRESS_FETCH_SUCCESS', payload: { data: { address: { name, fullName }, latlong } } });

  return (
    <Wrapper>
      <FavoriteContainer color={theme} onClick={handleClick}>
        {name}
      </FavoriteContainer>
    </Wrapper>
  );
};

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  theme: selectThemeColor,
});

Favorite.propTypes = {
  favorite: PropTypes.object,
  theme: PropTypes.string,
};

export default connect(mapStateToProps)(Favorite);
