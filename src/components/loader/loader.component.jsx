import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeColor } from 'redux/theme/theme.selectors';

import { LOADER_DELAY } from 'config/consts';

import { Container, Spinner, Bounce, Text } from './loader.styles';

/* -------------------------------------------------------------------------- */

const Loader = ({ theme, text }) => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(true), LOADER_DELAY);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return showLoader ? (
    <Container>
      <Spinner>
        <Bounce />
        <Bounce delay />
      </Spinner>

      {text && <Text color={theme}>{text}</Text>}
    </Container>
  ) : null;
};

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  theme: selectThemeColor,
});

Loader.propTypes = {
  theme: PropTypes.string,
  text: PropTypes.string,
};

export default connect(mapStateToProps)(Loader);
