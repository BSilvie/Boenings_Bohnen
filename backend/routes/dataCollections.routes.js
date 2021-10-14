const dataCollections = require("../controllers/dataCollections.controller");

var express = require("express");
var router = express.Router();

// create new dataCollection-entry
router.post("/", dataCollections.create);

// retrieve all entries
router.get("/", dataCollections.findAll);

// retrieve all entries of a specified device address
router.get("/:deviceAddress", dataCollections.findAllByDeviceAddress);

// retrieve an entry by deviceAddress and Id
router.get("/:deviceAddress/id/:id", dataCollections.findOneByDeviceAddressAndId);

// retrieve only sensordata from collection with deviceAddress
router.get("/sensordata/:deviceAddress", dataCollections.fetchAllSensordataEntriesFromLatestDBVersion);

module.exports = router;