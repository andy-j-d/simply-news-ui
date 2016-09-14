import { takeEvery, takeLatest } from 'redux-saga'
import { call, put, select } from 'redux-saga/effects'
import { getArticles as getArticlesRequest } from '../api';

export const GET_ARTICLES = 'GET_ARTICLES';
export const GET_ARTICLES_REQUESTED = 'GET_ARTICLES_REQUESTED';
export const GET_ALL_ARTICLES_REQUESTED = 'GET_ALL_ARTICLES_REQUESTED';

function* getArticles({ payload, id }) {
  yield put({ type: GET_ARTICLES, id, status: 'request' });
  try {
    const articles = yield call(getArticlesRequest, payload);
    yield put({ type: GET_ARTICLES, articles, id, status: 'success' });
  } catch (e) {
    yield put({ type: GET_ARTICLES, message: e.message, status: 'failure', error: e });
  }
}

function* getArticlesSaga() {
  yield* takeEvery(GET_ARTICLES_REQUESTED, getArticles);
}

function* getAllArticles() {
  const feed = yield select(state => state.feed);
  yield feed.map(({ id, rss_url }) => call(getArticles, { payload: { rss_url }, id }));
}

function* getAllArticlesSaga() {
  yield* takeLatest(GET_ALL_ARTICLES_REQUESTED, getAllArticles)
}

export default function* rootSaga() {
  yield [
    getArticlesSaga(),
    getAllArticlesSaga()
  ]
}
