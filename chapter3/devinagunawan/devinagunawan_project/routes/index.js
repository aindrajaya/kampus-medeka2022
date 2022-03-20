var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', subTitle: 'zzzzzzzzzzzzzzzzzzzzzz' });
});

module.exports = router;

// const express = require("express");
// const router = express.Router();
// const pagesRouter = require("./pages");

// router.use(pagesRouter);
// router.route()
// module.exports = router