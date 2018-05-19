import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { render, hydrate } from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
// import 'typeface-roboto';

import App from './App';
import sagas from './api/sagas';
import reducer from './api/reducers';
import firebase from './api/firebase';
 
function prepareStoreHistory() {
  const result = {
    history: createHistory(),
    store: undefined,
    saga: undefined,
  }
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [
    routerMiddleware(result.history),
    sagaMiddleware,
  ];
  const composeEnhancers = composeWithDevTools({});
  const composed = composeEnhancers(applyMiddleware(...middlewares));
  result.store = createStore(reducer, composed);
  sagaMiddleware.run(sagas, firebase);

  return result;
}

const rootEl = document.getElementById('root');
const isPreRendered = Boolean(rootEl.childElementCount > 0);

const renderer = isPreRendered
? hydrate
: render;

const { history, store } = prepareStoreHistory();

const WrappedApp = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

renderer(<WrappedApp />, rootEl);

registerServiceWorker();
