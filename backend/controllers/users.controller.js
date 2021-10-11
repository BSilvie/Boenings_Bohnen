const { users } = require("../models");
const db = require("../models");
const crypto = require('crypto');
const Users = db.users;

// create and save
exports.create = (req, res) => {
    console.log(req.body);
    // validation
    if(!req.body.username || !req.body.email || !req.body.password){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    const sha512sum = crypto.createHash('sha512');
    const hashedPassword = sha512sum.update(req.body.password).digest('hex');

    // create sensordata object
    const users = new Users({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        location: req.body.location
    });

    // putting the sensordata into the db
    users
    .save(users)
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
    Users
        .find()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occured while trying to fetch the users."
            });
        });
};

// Find a single sensordata-entry with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    // find an entry by looking for the specified id
    Users
        .findById(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: "Found no user with id " + id
                });
            } else {
                res.send(data);
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving user with id " + id
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
    Users
        .findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Can not update the specified user with id ${id}. Maybe the Entry was not found.`
                });
            } else {
                res.send({
                    message: 'user was updated successfully!'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `An Error occured while trying to update the user with id ${id}`
            });
        });
};

// Delete a sensordata-entry specified by id
exports.delete = (req, res) => {
    const id = req.params.id;

    // find the entry by the id and remove it
    Users
        .findByIdAndRemove(id)
        .then(data => {
            if(!data){
                res.status(404).send({
                    message: `Can not delete the user with id ${id}. Maybe the entry was not found`
                });
            } else {
                res.send({
                    message: 'The specified user was deleted successfully!'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete the specified user with id ${id}`
            });
        });
};

// Delete all sensordata from db
exports.deleteAll = (req, res) => {

    // find all entries and delete them without a condition
    Users
        .deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} user were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occured while trying to remove all users."
            });
        });
};

// Find all sensordata by mac-address
exports.findAllByLocation = (req, res) => {
    const location = req.params.location;

    // find all sensordatas with the deviceAddress-Condition
    Users
        .find({location: location})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "An error occured while trying to retrieve all users from location " + location
            });
        });
};

