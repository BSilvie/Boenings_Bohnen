// requiring models
const { dbversions } = require("../models");
const db = require("../models");
const DBVersion = db.dbversions;

// define method to increment dbVersion
function incrementDatabaseVersion(){
    DBVersion.findOneAndUpdate();
}