const router = require("express").Router();
const page = require("../controllers/pagesControllers");

router.get("/", page.home);
module.exports = router;