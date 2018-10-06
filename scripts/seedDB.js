const mongoose = require("mongoose");
const db = require("../models");

// This file empties the ExerciseList collection and inserts the exercises below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/exerciselist"
);

const exerciseSeed = [
    {
        name: "Deadlift",
        bodyparts: [
            "legs",
            "posteriorchain",
            "back",
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistanceband"
        ],
        style: "compound"
    },
    {
        name: "Romanian Deadlift",
        bodyparts: [
            "legs",
            "posteriorchain",
            "back",
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistanceband"
        ],
        style: "compound"
    },
    {
        name: "Overhead Press",
        bodyparts: [
            "shoulders",
            "triceps",
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistanceband"
        ],
        style: "compound"
    }
];




db.ExerciseList
  .remove({})
  .then(() => db.ExerciseList.collection.insertMany(exerciseSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
