const feed = require('./feed');

const sendJSONResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

const controller = {
  home: (req, res, next) => sendJSONResponse(res, 200, { message: 'Simply News API' }),
  feed: (req, res, next) => sendJSONResponse(res, 200, feed)
};

module.exports = controller;
