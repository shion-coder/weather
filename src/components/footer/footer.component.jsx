import React from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeColor } from 'redux/theme/theme.selectors';

import { FooterContainer, Span } from './footer.styles';

/* -------------------------------------------------------------------------- */

const Footer = ({ theme }) => (
  <FooterContainer color={theme}>
    <Span>&copy; 2020</Span>

    <Span>|</Span>

    <Span as="a" href="/">
      Shion
    </Span>
  </FooterContainer>
);

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  theme: selectThemeColor,
});

Footer.propTypes = {
  theme: PropTypes.string,
};

export default connect(mapStateToProps)(Footer);
