const feed = require('./feed');
var readFeed = require('feed-read');

const sendJSONResponse = (res, status, content) => {
  res.status(status);
  res.json(content);
};

const scrubText = (text) => text && text.replace(/(<\/?[^>]+(>|$))|(&(.*?);)/g, "");

const articles = ({ query: { url, qty } = {} }, res, next) => {
  console.log('req', url);
  return readFeed(url, (err, articles) => {
    if (err) return console.error(err);
    // Each article has the following properties:
    //
    //   * "title"     - The article title (String).
    //   * "author"    - The author's name (String).
    //   * "link"      - The original article link (String).
    //   * "content"   - The HTML content of the article (String).
    //   * "published" - The date that the article was published (Date).
    //   * "feed"      - {name, source, link}
    //
    return sendJSONResponse(res, 200, articles);
  });

};

const controller = {
  home: (req, res, next) => sendJSONResponse(res, 200, { message: 'Simply News API' }),
  feed: (req, res, next) => sendJSONResponse(res, 200, feed),
  articles
};

module.exports = controller;
