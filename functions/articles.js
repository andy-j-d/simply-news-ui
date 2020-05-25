const readFeed = require("feed-read");

exports.handler = function (event, context, callback) {
  const { url, qty } = event.queryStringParameters || {};
  if (!url) {
    return callback(null, {
      statusCode: 404,
    })
  }
  readFeed(url, (err, articles) => {
    if (err) {
      return callback(err, {
        statusCode: 404,
      });
    }
    return callback(null, {
      statusCode: 200,
      body: articles,
    });
  });
};
