import React from 'react';

import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import { BrowserRouter as Router } from 'react-router-dom';

import Theme from 'config/theme';

import App from 'containers/app/app.container';

import { GlobalStyles } from 'utils/styles/global-styles';
import 'utils/styles/main.css';

/* -------------------------------------------------------------------------- */

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Theme>
        <GlobalStyles />

        <Router>
          <App />
        </Router>
      </Theme>
    </PersistGate>
  </Provider>
);

/* -------------------------------------------------------------------------- */

export default Root;
