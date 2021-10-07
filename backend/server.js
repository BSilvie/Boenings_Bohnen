require("dotenv").config();

const express = require('express');
const app = express();

const port = process.env.NODE_DOCKER_PORT || 8080;

/**
 * Starting the Server
 */
app.listen(port, () => {
    console.log("Server started successfully at http://localhost:${port}");
});

/**
 * Defining Routes
 */
app.get('/', function(req, res){
    res.send('Hello World');
});

app.use(express.urlencoded({
    extended: true
}));