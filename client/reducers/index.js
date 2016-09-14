import { combineReducers } from 'redux';

import { feed as feedData } from '../data';
import { TOGGLE_EXPANDED, TOGGLE_MORE } from '../actions';
import { GET_ARTICLES } from '../sagas';

const sortByName = array => array.sort((a, b) => {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;
});

const addDefaults = feed => feed.map(source => ({
  ...source,
  loading: false
}));

const toggleAttribute = (array, id, attribute, value) => array.map(source => source.id === id ? {
    ...source,
    [attribute]: value || !source[attribute]
  } : source);

const feed = (state = addDefaults(sortByName(feedData)), { type, id, status, articles, message }) => {

  switch (type) {

    case TOGGLE_EXPANDED:
      return toggleAttribute(state, id, 'expanded');

    case TOGGLE_MORE:
      return toggleAttribute(state, id, 'more');

    case GET_ARTICLES:
      if (status === 'success') {
        return state.map(source => source.id === id ? {
          ...source,
          articles,
          loading: false,
          error: null
        } : source);
      }
      if (status === 'request') {
        return toggleAttribute(state, id, 'loading', true);
      }
      if (status === 'failure') {
        return state.map(source => source.id === id ? {
          ...source,
          loading: false,
          error: message
        }: source);
      }

    default: return state;
    
  }

};

export default combineReducers({ feed });
