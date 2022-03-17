var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/main', (req, res) => {
  res.render('main', {
    title: "Halaman Main"
  })
})

router.get('/about', (req, res) => {
  res.render('about', {
    title: "Halaman Main",
    name: "Kevin"
  })
})

module.exports = router;
