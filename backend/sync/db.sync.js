// requiring models
require('dotenv').config();
const { dbversions, sensordata } = require("../models");
const db = require("../models");
const axios = require("axios");

const DBVersion = db.dbversions;
const Sensordata = db.sensordata;

const sync = {}

// define method to increment dbVersion
sync.incrementDatabaseVersion = () => {
    DBVersion.findOneAndUpdate(
        {},
        {$inc: {dbVersion: 1}},
        {
            new: true,
            upsert: true
        }
    )
    .then(data => { 
        console.log("[SYNC-WORKFLOW] updated dbVersion to " + data.dbVersion);
        return data.dbVersion;
    })
    .catch(error => { 
        console.log("[SYNC-WORKFLOW] An error occured while trying to increment the dbVersion" + error.message)
    });
};

// define method to query all sensordata collected until now
sync.fetchAllSensorData = async () => {
        var result;
        // find all 
        Sensordata
        .find()
        .then(data => {
            console.log(data);
            result = data;
        })
        .catch(err => {
            console.log("[SYNC-WORKFLOW] An error occured while trying to fetch all sensordata-entries.");
            console.log(err);
        });

        console.log("debug: " + result);
        return await result;
};

// get mac address of device
sync.getMacAddress = () => {
    const os = require('os');
    return os.networkInterfaces().eth0[0].mac.toUpperCase();
};

// running sync method
sync.runRemoteSync = async () => {
    const protocol = process.env.REMOTE_API_PROTOCOL;
    const host = process.env.REMOTE_API_HOST;
    const port = process.env.REMOTE_API_PORT;

    const deviceAddress = sync.getMacAddress();
    const sensorData =  sync.fetchAllSensorData();
    const dbVersion = sync.incrementDatabaseVersion();

    const payload = {
        "deviceAddress": deviceAddress,
        "sensorData": sensorData,
        "dbVersion": dbVersion
    };

    console.log("[SYNC-WORKFLOW] Sending Request...");

    await axios.post(protocol + "://" + host + ":" + port + "/api/dataCollection", payload)
    .then(data => {
        console.log(`[SYNC-WORKFLOW] Request send successfully with statusCode ${data.status}`);
        console.log(data);
    })
    .catch(error => {
        console.log("[SYNC-WORKFLOW] An error occured while sending the current databaseCollection to remoteServer");
        console.log(payload);
    });
};

module.exports = sync;