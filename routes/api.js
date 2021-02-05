const express = require("express");
const Workout = require("../models/Workout");
const Router = express.Router();

// GET route to return last workout
Router.get("/api/workouts", (req, res) => {
  Workout.find()
  .sort({"day": -1})
  .limit(1)
  .then((workout) => {
    res.json(workout);
  });
});

// POST route to create a workout
Router.post("/api/workouts/", (req, res) => {
  Workout.create(req.body).then((workout) => {
    res.json(workout);
  });
});

// PUT route to add an exercise to a workout
Router.put("/api/workouts/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.body);

    Workout.findByIdAndUpdate(id, {
      $push: {exercises: req.body}
    })
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        console.log(err);
      });
});

// GET route to all workouts
Router.get("/api/workouts/range", (req,res) => {
  Workout.find({})
  .then((workouts) => {
    res.json(workouts);
  })
});

module.exports = Router;
