const db = require("../models");
const Sensordata = db.sensordata;

// create and save
exports.create = (req, res) => {
    console.log(req.body);
    // validation
    if(!req.body.dataValue || !req.body.dataType || !req.body.deviceAddress){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    // create sensordata object
    const sensordata = new Sensordata({
        dataValue: req.body.dataValue,
        dataType: req.body.dataType,
        deviceAddress: req.body.deviceAddress
    });

    // putting the sensordata into the db
    sensordata
    .save(sensordata)
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occured while trying to save sensordata"
        });
    });
};

// retrieve all sensordata from db
exports.findAll = (req, res) => {
    Sensordata
        .find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while trying to fetch the sensordata."
            });
        });
};

// Find a single sensordata-entry with an id
exports.findOne = (req, res) => {
    console.log("request goes in");
};

// Update a sensordata-entry by the id in the request
exports.update = (req, res) => {
    console.log("request goes in");
};

// Delete a sensordata-entry specified by id
exports.delete = (req, res) => {
    console.log("request goes in");
};

// Delete all sensordata from db
exports.deleteAll = (req, res) => {
    console.log("request goes in");
};

// Find all sensordata by mac-address
exports.findAllByAddress = (req, res) => {
    console.log("request goes in");
};

