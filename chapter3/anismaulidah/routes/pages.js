const router = require("express").Router();
const page = 
require("../controllers/pagesController");
require("../controllers/pages.js");

router.get("/", page.about);
router.get("/about", page.about);

module.exports = router;