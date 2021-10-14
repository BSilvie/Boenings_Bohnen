const dbversions = require("../controllers/dbversions.controller");

var express = require("express");
var router = express.Router();

// retrieve all entries
router.get("/", dbversions.findAll);

//retrieve latest entry
router.get("/latest", dbversions.findLatest);

module.exports = router;