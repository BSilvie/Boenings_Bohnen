const dataCollections = require("../controllers/dataCollections.controller");

var express = require("express");
var router = express.Router();

// create new sensordata-entry
router.post("/", dataCollections.create);

// retrieve all entries
router.get("/", dataCollections.findAll);

// retrieve an entry by deviceAddress and Id
router.get("/:deviceAddress/id/:id", dataCollections.findOneByDeviceAddressAndId);

module.exports = router;