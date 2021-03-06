import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { render, hydrate } from 'react-dom';

import App from './App';
import sagas from './api/sagas';
import reducer from './api/reducers';
import firebase from './api/firebase';

import registerServiceWorker from './registerServiceWorker';

import 'leaflet/dist/leaflet.css';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
// let tasks;

// function registerOffline() {
//   const { online } = navigator;
//   tasks.cancel();
//   tasks = sagaMiddleware.run(sagasOffline, firebase);
// }

function prepareStoreHistory() {
  const result = {
    history: createHistory(),
    store: undefined,
    saga: undefined,
  }

  const middlewares = [
    routerMiddleware(result.history),
    sagaMiddleware,
  ];
  const enhancedCompose = composeWithDevTools({});
  const composedMiddlewares = enhancedCompose(applyMiddleware(...middlewares));
  result.store = createStore(reducer, composedMiddlewares);
  sagaMiddleware.run(sagas, firebase);

  // window.addEventListener('offline', () => {
  //   const { online } = navigator;
  //   registerOffline();
  //   result.store.dispatch({
  //     type: 'GLOBAL_OFFLINE',
  //   })
  // })

  return result;
}

const rootEl = document.getElementById('root');
const isPreRendered = Boolean(rootEl.childElementCount > 0);

const renderer = isPreRendered ? hydrate : render;

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
