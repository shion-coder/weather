import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeColor } from 'redux/theme/theme.selectors';

import { FiSearch } from 'react-icons/fi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { IconSearchbarContainer } from './icon-searchbar.styles';

/* -------------------------------------------------------------------------- */

const IconSearchbar = ({ type, theme }) => {
  const icon = {
    search: <FiSearch />,
    up: <IoIosArrowUp />,
    down: <IoIosArrowDown />,
  };

  return <IconSearchbarContainer color={theme}>{type && icon[type]}</IconSearchbarContainer>;
};

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  theme: selectThemeColor,
});

IconSearchbar.propTypes = {
  type: PropTypes.string,
  theme: PropTypes.string,
};

export default connect(mapStateToProps)(IconSearchbar);
