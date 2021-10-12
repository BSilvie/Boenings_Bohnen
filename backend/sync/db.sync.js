// requiring models
require('dotenv').config();
const { dbversions, sensordata } = require("../models");
const db = require("../models");
const axios = require("axios");
const { resolve } = require('path');

const DBVersion = db.dbversions;
const Sensordata = db.sensordata;

const sync = {};

// get mac address of device
sync.getMacAddress = () => {
    const os = require('os');
    return os.networkInterfaces().eth0[0].mac.toUpperCase();
};

// running sync method
sync.runRemoteSync = async function(){
    const protocol = process.env.REMOTE_API_PROTOCOL;
    const host = process.env.REMOTE_API_HOST;
    const port = process.env.REMOTE_API_PORT;

    const deviceAddress = sync.getMacAddress();
    const dbVersion = await DBVersion.findOneAndUpdate({},
        {$inc: {dbVersion: 1}},
        {
            new: true,
            upsert: true
        });
    const sensorData = await Sensordata.find();

    const payload = {
        "deviceAddress": deviceAddress,
        "sensorData": sensorData,
        "dbVersion": dbVersion.dbVersion
    };

    console.log(payload);

    const headers = {
        'Content-Type': 'application/json;charset=UTF-8',
        'Connection': 'Keep-Alive',
        'Keep-Alive': 'timeout=5, max=1000'
    }

    console.log("[SYNC-WORKFLOW] Sending Request...");
    await axios.post(protocol + "://" + host + ":" + port + "/api/dataCollection", payload, {headers: headers})
    .then(data => {
        console.log(`[SYNC-WORKFLOW] Request send successfully to host ${host} with statusCode ${data.status}`);
    })
    .catch(error => {
        console.log("[SYNC-WORKFLOW] An error occured while sending the current databaseCollection to remoteServer");
        console.log(error.message);
    });
};

module.exports = sync;