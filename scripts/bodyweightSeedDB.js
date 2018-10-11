const mongoose = require("mongoose");
const db = require("../models");

// This file empties the ExerciseList collection and inserts the exercises below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/exerciselist"
);

const bodyweightSeed = [
    {
        name: "Jump squats",
        bodyparts: ["legs"],
        style: "compound"
    },
    {
        name: "Pistol squats",
        bodyparts: ["legs"],
        style: "compound"
    },
    {
        name: "Body squats",
        bodyparts: ["legs"],
        style: "compound"
    },
    {
        name: "Cossack squats",
        bodyparts: ["legs"],
        style: "compound"
    },
    {
        name: "Plyometric lunges",
        bodyparts: [
            "legs",
            "posterior chain"
    ],
        style: "compound"
    },
    {
        name: "Hip thrusts",
        bodyparts: [
            "legs",
            "posterior chain"
    ],
        style: "accessory"
    },
    {
        name: "One-legged Hip thrusts",
        bodyparts: [
            "legs",
            "posterior chain"
    ],
        style: "accessory"
    },
    {
        name: "Single leg RDLs",
        bodyparts: [
            "legs",
            "posterior chain",
            "back"
    ],
        style: "compound"
    },
    {
        name: "Handstand pushups",
        bodyparts: [
            "shoulders",
            "triceps"
    ],
        style: "compound"
    },
    {
        name: "Doorjam rows",
        bodyparts: [
            "posterior chain",
            "biceps",
            "back"
    ],
        style: "compound"
    },
    {
        name: "Pushups",
        bodyparts: [
            "triceps",
            "shoulders",
            "chest"
    ],
        style: "compound"
    },
    {
        name: "Down dog pushups",
        bodyparts: [
            "triceps",
            "shoulders",
            "chest"
    ],
        style: "compound"
    },
    {
        name: "Dive bomber pushups",
        bodyparts: [
            "triceps",
            "shoulders",
            "chest"
    ],
        style: "compound"
    },
    {
        name: "Plyometric pushups",
        bodyparts: [
            "triceps",
            "shoulders",
            "chest"
    ],
        style: "compound"
    },
    {
        name: "Archer pushups",
        bodyparts: [
            "triceps",
            "shoulders",
            "chest"
    ],
        style: "compound"
    },
    {
        name: "Isometric YWTs",
        bodyparts: [
            "posterior chain",
            "shoulders",
            "back"
    ],
        style: "accessory"
    },
    {
        name: "V-ups",
        bodyparts: [
            "core"
        ],
        style: "accessory"
    },
    {
        name: "Windsheild wipers",
        bodyparts: [
            "core"
        ],
        style: "accessory"
    },
    {
        name: "Russian twists",
        bodyparts: [
            "core"
        ],
        style: "accessory"
    },
    {
        name: "Plank supermans",
        bodyparts: [
            "core"
        ],
        style: "accessory"
    },
]

db.Bodyweight
  .remove({})
  .then(() => db.Bodyweight.collection.insertMany(bodyweightSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });