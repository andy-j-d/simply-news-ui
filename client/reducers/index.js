import { combineReducers } from 'redux';

import { feed as feedData } from '../data';
import { TOGGLE_EXPANDED, TOGGLE_MORE } from '../actions';
import { GET_ARTICLES } from '../sagas';

const sortByName = array => array.sort((a, b) => {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;
});

const toggleAttribute = (array, id, attribute) => array.map(source => source.id === id ? {
    ...source,
    [attribute]: !source[attribute]
  } : source);

const feed = (state = sortByName(feedData), { type, id, status, articles }) => {

  switch (type) {

    case TOGGLE_EXPANDED:
      return toggleAttribute(state, id, 'expanded');

    case TOGGLE_MORE:
      return toggleAttribute(state, id, 'more');

    case GET_ARTICLES:
      if (status === 'success') {
        return state.map(source => source.id === id ? {
          ...source,
          articles
        } : source);
      } 

    default: return state;
    
  }

};

export default combineReducers({ feed });
