const express = require('express');
const router = express.Router();
const pagesRouter = require("./pages");


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/main', (req, res) => {
  res.render('main', {
    title: "Halaman Main"
  })
})

router.get('/about', (req, res) => {
  res.render('about', {
    title: "Halaman About Kevin",
    name: "Kevin"
  })
})

router.use(pagesRouter);

module.exports = router;
