const express = require('express');
const router = express.Router();
const pagesRouter = require("./pages");

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use(pagesRouter);

module.exports = router;
