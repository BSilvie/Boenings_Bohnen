const users = require("../controllers/users.controller");

var express = require("express");
var router = express.Router();

// create new user entry
router.post("/", users.create);

// retrieve all entries
router.get("/", users.findAll);

// retrieve all entries by location
router.get("/location/:location", users.findAllByLocation);

// retrieve a single entry by id
router.get("/:id", users.findOne);

// update sensordata-entry
router.put("/:id", users.update);

// delete entry by id
router.delete("/:id", users.delete);

// delete all entries
router.delete("/", users.deleteAll);

//login user
router.post("/login", users.loginUser);

//logout user
router.post("/logout", users.logoutUser);

module.exports = router;