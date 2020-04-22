import React from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeColor } from 'redux/theme/theme.selectors';
import { toggleTheme } from 'redux/theme/theme.actions';

import { Link } from 'react-router-dom';
import Toggle from 'react-toggle';

import IconToggleTheme from 'components/icon/icon-toggle-theme/icon-toggle-theme.component';
import logo from 'assets/images/logo.png';

import { HeaderContainer, Image } from './header.styles';

/* -------------------------------------------------------------------------- */

const Header = ({ theme, toggleTheme }) => (
  <HeaderContainer>
    <Link to="/">
      <Image src={logo} alt="Logo" />
    </Link>

    {theme && (
      <Toggle
        checked={theme === 'light'}
        icons={{ checked: <IconToggleTheme type="light" />, unchecked: <IconToggleTheme type="dark" /> }}
        onChange={toggleTheme}
      />
    )}
  </HeaderContainer>
);

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  theme: selectThemeColor,
});

Header.propTypes = {
  theme: PropTypes.string,
  toggleTheme: PropTypes.func,
};

export default connect(mapStateToProps, { toggleTheme })(Header);
