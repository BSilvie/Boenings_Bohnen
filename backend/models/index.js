const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.sensordata = require("./sensordata.model")(mongoose);
db.users = require("./users.model")(mongoose);
db.dbversions = require("./dbversions.model")(mongoose);

module.exports = db;