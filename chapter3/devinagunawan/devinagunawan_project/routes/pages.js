// const router = require("express").Router();
// const page =
//  require("../controllers/pagesControllers");
//  require("../controllers/pages.js");

//  router.get("/", page.home);
//  module.exports = router;

//  router.get("/about", page.about);
//  module.exports = router;

//  router.get("/articles", page.articles);
//  module.exports = router;

//------------------------------------------------------------------------------------------
const router = require("express").Router();
const { about } = require ('../controllers/pages')
const { home, articles } = require('../controllers/pagesControllers')

 router.get("/", home);
 router.get("/about", about);
 router.get("/articles", articles);
 module.exports = router;