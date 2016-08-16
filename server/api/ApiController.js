const feed = require('./feed');

const sendJSONResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

const articles = ({ query: { url, qty } = {} }, res, next) => {
  console.log('req', url);
  return sendJSONResponse(res, 200, 'hi');
};

const controller = {
  home: (req, res, next) => sendJSONResponse(res, 200, { message: 'Simply News API' }),
  feed: (req, res, next) => sendJSONResponse(res, 200, feed),
  articles
};

module.exports = controller;
