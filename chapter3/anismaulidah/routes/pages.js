const router = require("express").Router();
const page = 
require("../controllers/pagesController");

router.get("/", page.home);
router.get("/about", page.about);

module.exports = router;