import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { favoritesSelector } from 'redux/favorites/favorites.selectors';

import Favorite from 'components/favorite/favorite.component';

import { Wrapper, Container, FavoriteContainer } from './favorites.styles';

/* -------------------------------------------------------------------------- */

const Favorites = ({ favorites }) => {
  return (
    favorites && (
      <Wrapper>
        <Container>
          {favorites.map(favorite => (
            <FavoriteContainer key={favorite.latlong}>
              <Favorite favorite={favorite} />
            </FavoriteContainer>
          ))}
        </Container>
      </Wrapper>
    )
  );
};

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  favorites: favoritesSelector,
});

Favorites.propTypes = {
  favorites: PropTypes.array,
};

export default connect(mapStateToProps)(Favorites);
