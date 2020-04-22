import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from 'redux/root-reducer';
import { rootSaga } from 'redux/root-saga';

/* -------------------------------------------------------------------------- */

// Setup redux-saga middleware
const sagaMiddleware = createSagaMiddleware();

// List of middlewares
const middlewares = [sagaMiddleware];

// Add Redux DevTools Extension
const enhancer =
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : compose(applyMiddleware(...middlewares));

export const store = createStore(rootReducer, enhancer);

export const persistor = persistStore(store);

// Run Redux Saga
sagaMiddleware.run(rootSaga);
