var express = require("express");
var router = express.Router();
const pageRouter = require("./pages");

/* GET home page. */
router.use(pageRouter);

module.exports = router;
