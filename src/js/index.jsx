import React from 'react';
import { createStore, compose, applyMiddleware } from 'redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './redux/combineReducer';
// Импорт кастомных компонент
import Range from './containers/range';

const middlewares = [thunk];
let devTools;

if (process.env.NODE_ENV === 'development') {
  const { logger } = require('redux-logger');
  middlewares.push(logger);
  devTools = window.devToolsExtension ? window.devToolsExtension() : f => f;
} else {
  devTools = f => f;
}

const store = createStore(
  reducer,
  compose(
    applyMiddleware(...middlewares),
    devTools,
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Range />
  </Provider>,
  document.getElementById('component')
);
