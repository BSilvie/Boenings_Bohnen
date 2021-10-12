const { dataCollections } = require("../models");
const db = require("../models");
const DataCollections = db.dataCollections;

exports.findAll = (req, res) => {
    DataCollections
    .find()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while trying to fetch the dataCollections."
        });
    });
};

exports.findAllByDeviceAddress = (req, res) => {
    const deviceAddress = req.params.deviceAddress;

    DataCollections
    .find({deviceAddress: deviceAddress})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while trying to fetch the dataCollections."
        });
    });
};

exports.create = (req, res) => {
    console.log(req.body);
    // validation
    if(!req.body.deviceAddress || (!req.body.sensorData && !req.body.length) || !req.body.dbVersion){
        console.log(req.body.sensorData);
        res.status(400).send({message: "Content can not be empty: " + req.body.sensorData});
        return;
    }

    // create sensordata object
    const dataColletion = new DataCollections({
        deviceAddress: req.body.deviceAddress,
        sensorData: req.body.sensorData,
        dbVersion: req.body.dbVersion
    });

    // putting the sensordata into the db
    dataColletion
    .save(dataColletion)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while trying to save the dataCollections"
        });
    });
};

exports.findOneByDeviceAddressAndId = (req, res) => {
    const deviceAddress = req.params.deviceAddress;
    const id = req.params.id;

    // find an entry by looking for the specified id
    DataCollections
        .findOne({deviceAddress: deviceAddress})
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: "Found no data for device " + deviceAddress
                });
            } else {
                // find the (first) sensordata with matching id
                var dataArray = Object.entries(data.sensorData);
                var needle = dataArray.find(object => object[1]._id === id);

                if(!needle) res.status(404).send({message: "found no data for id " + id})
                else res.send(needle[1]);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving dataCollection with id " + id + " and device address " + deviceAddress
            });
        });
};

exports.fetchAllSensordataEntriesFromLatestDBVersion = (req, res) => {
    const deviceAddress = req.params.deviceAddress;
    DataCollections
        .findOne({deviceAddress: deviceAddress})
        .sort({ "dbVersion": -1 })
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: "Found no data for device " + deviceAddress
                });
            } else {
                res.send(data.sensorData);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving sensordata for device " + deviceAddress
            });
        });
}