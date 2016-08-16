const express = require('express');
const { home, feed } = require('./ApiController');
let router = express.Router();

router.get('/', home);

router.get('/feed', feed);

module.exports = router;
