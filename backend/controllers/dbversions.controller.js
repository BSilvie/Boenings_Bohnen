const { dbversions } = require("../models");
const db = require("../models");
const DBVersion = db.dbversions;

exports.findAll = (req, res) => {
    // find all without a condition
    DBVersion
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
exports.findLatest = (req, res) => {
    // find all sensordatas with the deviceAddress-Condition
    DBVersion
    .findOne({}, {sort: {created_at: -1}})
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "An error occured while trying to retrieve the latest dbVersion "
        });
    });
};