export const TOGGLE_MORE = 'TOGGLE_MORE';
export const TOGGLE_EXPANDED = 'TOGGLE_EXPANDED';

export const toggleMore = id => dispatch => dispatch({
  type: TOGGLE_MORE,
  id
});

export const toggleExpanded = id => dispatch => dispatch({
  type: TOGGLE_EXPANDED,
  id
});
