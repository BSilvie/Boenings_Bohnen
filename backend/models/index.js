require('dotenv').config();
const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

switch(process.env.API_CONFIGURATION_MODE){
    case "LOCAL":
        db.sensordata = require("./sensordata.model")(mongoose);
        db.users = require("./users.model")(mongoose);
        db.dbversions = require("./dbversions.model")(mongoose);
        break;
    case "REMOTE":
        db.dataCollections = require("./dataCollections.model")(mongoose);
        break;
    default:
        db.sensordata = require("./sensordata.model")(mongoose);
        db.users = require("./users.model")(mongoose);
        db.dbversions = require("./dbversions.model")(mongoose);
        break;
}

module.exports = db;