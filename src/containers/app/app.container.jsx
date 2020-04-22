import React, { Suspense, lazy, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectThemeColor } from 'redux/theme/theme.selectors';
import { setDimensions } from 'redux/dimensions/dimensions.actions';

import { Switch, Route } from 'react-router-dom';
import { debounce } from 'lodash-es';

import Loader from 'components/loader/loader.component';
import Header from 'components/header/header.component';
import Footer from 'components/footer/footer.component';

import { Wrapper, Body } from './app.styles';

/* -------------------------------------------------------------------------- */

// Lazy loading
const Home = lazy(() => import('containers/home/home.container'));

const App = ({ theme, setDimensions }) => {
  useEffect(() => {
    const handleResize = debounce(() => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }, 1000);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [setDimensions]);

  return (
    <Wrapper background={theme}>
      <Header />

      <Body>
        <Suspense fallback={<Loader text="Loading Home ..." />}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Suspense>
      </Body>

      <Footer />
    </Wrapper>
  );
};

/* -------------------------------------------------------------------------- */

const mapStateToProps = createStructuredSelector({
  theme: selectThemeColor,
});

App.propTypes = {
  theme: PropTypes.string,
  setDimensions: PropTypes.func,
};

export default connect(mapStateToProps, { setDimensions })(App);
