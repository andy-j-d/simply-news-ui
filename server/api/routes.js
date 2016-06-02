var express = require('express');
var router = express.Router();
var feed = require('./feed');

var sendJSONresponse = function(res, status, content) {
  res.status(status);
  res.json(content);
};

router.get('/', function(req, res, next) {
  sendJSONresponse(res, 200, { message: 'Simply News API' });
});

router.get('/feed', function(req, res, next) {
  sendJSONresponse(res, 200, feed);
});

module.exports = router;
