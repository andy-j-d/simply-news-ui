import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger';
import feed from '../reducers';

const store = createStore(
  feed,
  applyMiddleware(createLogger())
);

export default store;
