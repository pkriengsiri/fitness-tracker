// Dependencies
const express = require("express");
var path = require("path");

// Create router instance
const Router = express.Router();


// View routes
Router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/exercise.html"));
});

Router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/stats.html"));
});


// Export router
module.exports = Router;