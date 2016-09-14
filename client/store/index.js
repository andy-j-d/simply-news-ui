/* global __PRODUCTION__ */

import { createStore, applyMiddleware, compose } from 'redux'
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import feed from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  feed,
  compose(
    __PRODUCTION__ ? applyMiddleware(sagaMiddleware) : applyMiddleware(sagaMiddleware, createLogger()),
    !__PRODUCTION__ && window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

sagaMiddleware.run(rootSaga);

export default store;
