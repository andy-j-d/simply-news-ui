import { GET_ARTICLES_REQUESTED, GET_ALL_ARTICLES_REQUESTED } from '../sagas';

export const TOGGLE_MORE = 'TOGGLE_MORE';
export const TOGGLE_EXPANDED = 'TOGGLE_EXPANDED';
export const TOGGLE_THEME = 'TOGGLE_THEME';

export const toggleMore = id => ({
  type: TOGGLE_MORE,
  id,
});

export const toggleExpanded = id => ({
  type: TOGGLE_EXPANDED,
  id,
});

export const getArticlesRequest = ({ payload, id }) => ({
  type: GET_ARTICLES_REQUESTED,
  payload,
  id,
});

export const requestAllArticles = () => ({
  type: GET_ALL_ARTICLES_REQUESTED,
});

export const toggleTheme = () => ({
  type: TOGGLE_THEME,
});
