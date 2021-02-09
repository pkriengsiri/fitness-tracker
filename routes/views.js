// Dependencies
const express = require("express");
var path = require("path");

// Create router instance
const Router = express.Router();


// View routes
Router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/exercise.html"));
}).catch((err) => {
    res.json(err);
  });;

Router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname,"../public/stats.html"));
}).catch((err) => {
    res.json(err);
  });;


// Export router
module.exports = Router;