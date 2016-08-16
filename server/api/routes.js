const express = require('express');
const { home, feed, articles } = require('./ApiController');
let router = express.Router();

router.get('/', home);

router.get('/feed', feed);

router.get('/articles', articles);

module.exports = router;
