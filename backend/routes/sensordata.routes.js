const sensordata = require("../controllers/sensordata.controller");

var express = require("express");
var router = express.Router();

// create new sensordata-entry
router.post("/", sensordata.create);

// retrieve all entries
router.get("/", sensordata.findAll);

// retrieve all entries by address
router.get("/device/:address", sensordata.findAllByAddress);

// retrieve a single entry by id
router.get("/:id", sensordata.findOne);

// update sensordata-entry
router.put("/:id", sensordata.update);

// delete entry by id
router.delete("/:id", sensordata.delete);

// delete all entries
router.delete("/", sensordata.deleteAll);

module.exports = router;