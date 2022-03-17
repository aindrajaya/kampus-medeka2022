const router = require("express").Router();
const page = require("../controllers/pagesController");

router.get('/', page.home);

module.exports = router;