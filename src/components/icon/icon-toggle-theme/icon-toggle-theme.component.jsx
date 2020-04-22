import React from 'react';
import PropTypes from 'prop-types';

import { FaSun, FaMoon } from 'react-icons/fa';

import { IconContainer } from './icon-toggle-theme.styles';

/* -------------------------------------------------------------------------- */

const IconToggleTheme = ({ type }) => {
  return type === 'light' ? (
    <IconContainer>
      <FaSun />
    </IconContainer>
  ) : (
    <IconContainer>
      <FaMoon />
    </IconContainer>
  );
};

/* -------------------------------------------------------------------------- */

IconToggleTheme.propTypes = {
  type: PropTypes.string,
};

export default IconToggleTheme;
