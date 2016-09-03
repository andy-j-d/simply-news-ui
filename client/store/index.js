import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import feed from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  feed,
  applyMiddleware(sagaMiddleware, createLogger())
);

sagaMiddleware.run(rootSaga);

export default store;
