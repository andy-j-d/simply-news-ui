export const TOGGLE_MORE = 'TOGGLE_MORE';
export const TOGGLE_EXPANDED = 'TOGGLE_EXPANDED';

export const toggleMore = id => ({
  type: TOGGLE_MORE,
  id
});

export const toggleExpanded = id => ({
  type: TOGGLE_EXPANDED,
  id
});
