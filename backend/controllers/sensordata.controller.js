const { sensordata } = require("../models");
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
        deviceAddress: req.body.deviceAddress,
        deviceName: req.body.deviceName
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
    
    // find all without a condition
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
    const id = req.params.id;

    // find an entry by looking for the specified id
    Sensordata
        .findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: "Found no Sensordata-Entry with id " + id
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Sensordata-Entry with id " + id
            });
        });
};

// Update a sensordata-entry by the id in the request
exports.update = (req, res) => {
    // check if the request body is empty
    if(!req.body){
        return res.status(400).send({
            message: 'Data to update can not be empty!'
        });
    }

    const id = req.params.id;

    // find the entry by the specified id and update
    Sensordata
        .findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Can not update the specified sensordata-entry with id ${id}. Maybe the Entry was not found.`
                });
            } else {
                res.send({
                    message: 'Sensordata-Entry was updated successfully!'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `An Error occured while trying to update the Sensordata-Entry with id ${id}`
            });
        });
};

// Delete a sensordata-entry specified by id
exports.delete = (req, res) => {
    const id = req.params.id;

    // find the entry by the id and remove it
    Sensordata
        .findByIdAndRemove(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Can not delete the sensordata-entry with id ${id}. Maybe the entry was not found`
                });
            } else {
                res.send({
                    message: 'The specified sensordata-entry was deleted successfully!'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete the specified sensordata-entry with id ${id}`
            });
        });
};

// Delete all sensordata from db
exports.deleteAll = (req, res) => {

    // find all entries and delete them without a condition
    Sensordata
        .deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} sensordata-entries were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occured while trying to remove all sensordata-entries."
            });
        });
};

// Find all sensordata by mac-address
exports.findAllByAddress = (req, res) => {
    const deviceAddress = req.params.address;

    // find all sensordatas with the deviceAddress-Condition
    Sensordata
        .find({deviceAddress: deviceAddress})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occured while trying to retrieve all sensordata-entries of device " + deviceAddress
            });
        });
};

