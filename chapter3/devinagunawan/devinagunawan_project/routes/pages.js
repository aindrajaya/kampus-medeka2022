const router = require("express").Router();
const page =
 require("../controllers/pagesControllers");
 require("../controllers/pages.js");

 router.get("/", page.home);
 module.exports = router;

 router.get("/about", page.about);
 module.exports = router;