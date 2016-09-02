import { combineReducers } from 'redux';

import { feed as feedData } from '../data';
import { TOGGLE_EXPANDED, TOGGLE_MORE } from '../actions';

const sortByName = array => array.sort((a, b) => {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;
});

const findIndexById = (array, id) => array.indexOf(({ id: itemId }) => id === itemId);

const toggleAttribute = (array, index, attribute) => ([
  ...array.slice(0, index),
  {
    ...array[index],
    [attribute]: !array[index][attribute]
  },
  ...array.slice(index + 1)
]);

const feed = (state = sortByName(feedData), { type, id }) => {

  const sourceIndex = id && findIndexById(state, id);

  switch (type) {

    case TOGGLE_EXPANDED:
      return toggleAttribute(state, sourceIndex, 'expanded');

    case TOGGLE_MORE:
      return toggleAttribute(state, sourceIndex, 'more');

    default: return state;
  }

};

export default combineReducers({ feed });
