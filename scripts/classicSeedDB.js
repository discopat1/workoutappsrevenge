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
            "posterior chain",
            "back"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistance band"
        ],
        style: "compound"
    },
    {
        name: "Romanian Deadlift",
        bodyparts: [
            "legs",
            "posterior chain",
            "back"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistance band"
        ],
        style: "compound"
    },
    {
        name: "Single-Leg Romanian Deadlift",
        bodyparts: [
            "legs",
            "posterior chain",
            "back"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistance band"
        ],
        style: "compound"
    },
    {
        name: "Sumo Deadlift",
        bodyparts: [
            "legs",
            "posterior chain",
            "back"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistance band"
        ],
        style: "compound"
    },
    {
        name: "Hip Thrusts",
        bodyparts: [
            "legs",
            "posterior chain",
            "back",
            "cable machine"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistance band",
            "physioball"
        ],
        style: "compound"
    },
    {
        name: "Snatch",
        bodyparts: [
            "legs",
            "posterior chain",
            "back",
            "shoulders"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
        ],
        style: "compound"
    },
    {
        name: "Clean",
        bodyparts: [
            "legs",
            "posterior chain",
            "back",
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
        ],
        style: "compound"
    },
    {
        name: "Jerk",
        bodyparts: [
            "legs",
            "posterior chain",
            "back",
            "shoulders"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
        ],
        style: "compound"
    },
    {
        name: "Front Squat",
        bodyparts: [
            "legs",
            "back"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistance band"
        ],
        style: "compound"
    },
    {
        name: "Goblet Squat",
        bodyparts: [
            "legs",
            "back"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
        ],
        style: "compound"
    },
    {
        name: "Back Squat",
        bodyparts: [
            "legs",
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistance band"
        ],
        style: "compound"
    },
    {
        name: "Pistol Squat",
        bodyparts: [
            "legs",
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistance band"
        ],
        style: "compound"
    },
    {
        name: "Cossack Squat",
        bodyparts: [
            "legs",
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
        ],
        style: "compound"
    },
    {
        name: "Reverse Lunge",
        bodyparts: [
            "legs",
            "posterior chain"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistance band"
        ],
        style: "compound"
    },
    {
        name: "Step-ups",
        bodyparts: [
            "legs",
            "posterior chain"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistance band"
        ],
        style: "compound"
    },
    {
        name: "Bulgarian spilt squats",
        bodyparts: [
            "legs",
            "posterior chain"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistance band"
        ],
        style: "compound"
    },
    {
        name: "Calf raises",
        bodyparts: [
            "legs",
            "posterior chain"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistance band"
        ],
        style: "accessory"
    },
    {
        name: "Overhead Press",
        bodyparts: [
            "shoulders",
            "triceps"
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
        name: "Lateral raise",
        bodyparts: [
            "shoulders",
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "resistanceband",
            "cable machine"
        ],
        style: "accessory"
    },
    {
        name: "Front raise",
        bodyparts: [
            "shoulders",
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "resistanceband",
            "cable machine"
        ],
        style: "accessory"
    },
    {
        name: "Reverse flys",
        bodyparts: [
            "shoulders",
            "back",
            "posterior chain"
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "resistanceband",
            "cable machine",
            "ghd bench"
        ],
        style: "accessory"
    },
    {
        name: "Shrugs",
        bodyparts: [
            "shoulders",
            "back",
            "posterior chain"
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "barbell",
            "resistance band"
        ],
        style: "accessory"
    },
    {
        name: "Facepulls",
        bodyparts: [
            "shoulders",
            "back",
            "posterior chain"
        ],
        equipment: [
            "gymnastic_rings",
            "ghd_bench",
            "cable_machine",
            "resistance band"
        ],
        style: "accessory"
    },
    {
        name: "External Rotators",
        bodyparts: [
            "shoulders"
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "resistance band"
        ],
        style: "accessory"
    },
    {
        name: "Back extension",
        bodyparts: [
            "shoulders",
            "posterior chain",
            "back"
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "resistance band",
            "ghd bench"
        ],
        style: "accessory"
    },
    {
        name: "Straight arm pull down",
        bodyparts: [
            "posterior chain",
            "back",
            "triceps"
        ],
        equipment: [
            "cable machine",
            "resistance band"
        ],
        style: "accessory"
    },
    {
        name: "Bench press",
        bodyparts: [
            "chest",
            "shoulders",
            "triceps"
        ],
        equipment: [
            "bench",
            "dumbell",
            "kettlebell",
            "barbell",
            "physioball"
        ],
        style: "compound"
    },
    {
        name: "Incline bench press",
        bodyparts: [
            "chest",
            "shoulders",
            "triceps"
        ],
        equipment: [
            "bench",
            "dumbell",
            "kettlebell",
            "barbell",
            "physioball"

        ],
        style: "compound"
    },
    {
        name: "Decline bench press",
        bodyparts: [
            "chest",
            "shoulders",
            "triceps"
        ],
        equipment: [
            "bench",
            "dumbell",
            "kettlebell",
            "barbell",
            "physioball"

        ],
        style: "compound"
    },
    {
        name: "Chest flys",
        bodyparts: [
            "chest",
        ],
        equipment: [
            "bench",
            "dumbell",
            "kettlebell",
            "physioball"

        ],
        style: "accessory"
    },
    {
        name: "Cable crossover",
        bodyparts: [
            "chest",
        ],
        equipment: [
            "cable machine"
        ],
        style: "accessory"
    },
    {
        name: "Dips",
        bodyparts: [
            "chest",
            "triceps"
        ],
        equipment: [
            "gymnastic rings",
            "roman chair",
            "playground"
        ],
        style: "compound"
    },
    {
        name: "Bicep curls",
        bodyparts: [
            "biceps"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "cable machine",
            "kettlebell",
            "resistance band"
        ],
        style: "accessory"
    },
    {
        name: "Bentover rows",
        bodyparts: [
            "posterior chain",
            "back",
            "biceps"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "cable machine",
            "kettlebell",
            "resistance band",
        ],
        style: "compound"
    },
    {
        name: "One arm rows",
        bodyparts: [
            "posterior chain",
            "back",
            "biceps"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "cable machine",
            "kettlebell",
            "resistance band",
            "bench"
        ],
        style: "compound"
    },
    {
        name: "Inverted rows",
        bodyparts: [
            "posterior chain",
            "back",
            "biceps"
        ],
        equipment: [
            "gymnastic rings",
            "playground",
            "pull-up bar"
        ],
        style: "compound"
    },
    {
        name: "Deadrows",
        bodyparts: [
            "posterior chain",
            "legs",
            "back",
            "biceps"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "cable machine",
            "kettlebell",
            "resistance band"
        ],
        style: "compound"
    },
    {
        name: "Seated rows",
        bodyparts: [
            "posterior chain",
            "back",
            "biceps"
        ],
        equipment: [
            "cable machine",
            "resistance band"
        ],
        style: "compound"
    },
    {
        name: "GHD rows",
        bodyparts: [
            "posterior chain",
            "back",
            "biceps"
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "barbell",
            "resistance band",
            "ghd bench"
        ],
        style: "compound"
    },
    {
        name: "Isometric YWT's",
        bodyparts: [
            "posterior chain",
            "back",
            "shoulders"
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "resistance band",
            "ghd bench",
            "bench"
        ],
        style: "accessory"
    },
    {
        name: "Overhand pull-ups",
        bodyparts: [
            "posterior chain",
            "back",
            "biceps"
        ],
        equipment: [
            "pull-up bar",
            "gymnastic rings",
            "playground"
        ],
        style: "compound"
    },
    {
        name: "Underhand pull-ups",
        bodyparts: [
            "posterior chain",
            "back",
            "biceps"
        ],
        equipment: [
            "pull-up bar",
            "gymnastic rings",
            "playground"
        ],
        style: "compound"
    },
    {
        name: "Switch-grip pull-ups",
        bodyparts: [
            "posterior chain",
            "back",
            "biceps"
        ],
        equipment: [
            "pull-up bar",
            "gymnastic rings",
            "playground"
        ],
        style: "compound"
    },
    {
        name: "Internal rotater pull-ups",
        bodyparts: [
            "posterior chain",
            "back",
            "biceps"
        ],
        equipment: [
            "gymnastic rings",
        ],
        style: "compound"
    },
    {
        name: "Neutral-grip pull-ups",
        bodyparts: [
            "posterior chain",
            "back",
            "biceps"
        ],
        equipment: [
            "pull-up bar",
            "gymnastic rings",
            "playground"
        ],
        style: "compound"
    },
    {
        name: "Skull crushers",
        bodyparts: [
            "triceps"
        ],
        equipment: [
            "dumbell",
            "barbell",
            "kettlebell",
            "resistance band",
            "cable machine"
        ],
        style: "accessory"
    },
    {
        name: "Tricep extensions",
        bodyparts: [
            "triceps"
        ],
        equipment: [
            "dumbell",
            "barbell",
            "kettlebell",
            "resistance band",
            "cable machine"
        ],
        style: "accessory"
    },
    {
        name: "Tricep pushdowns",
        bodyparts: [
            "triceps"
        ],
        equipment: [
            "resistance band",
            "cable machine"
        ],
        style: "accessory"
    },
    {
        name: "Bench dips",
        bodyparts: [
            "triceps"
        ],
        equipment: [
            "bench"
        ],
        style: "accessory"
    },
    {
        name: "V-ups",
        bodyparts: [
            "core"
        ],
        equipment: [
            
        ],
        style: "accessory"
    },
    {
        name: "Windsheild wipers",
        bodyparts: [
            "core"
        ],
        equipment: [
            
        ],
        style: "accessory"
    },
    {
        name: "Hanging windsheild wipers",
        bodyparts: [
            "core"
        ],
        equipment: [
            "pull-up bar",
            "playground"
        ],
        style: "accessory"
    },
    {
        name: "Russian twists",
        bodyparts: [
            "core"
        ],
        equipment: [
            "dumbell",
            "medball",
            "kettlebell",
        ],
        style: "accessory"
    },
    {
        name: "Plank supermans",
        bodyparts: [
            "core"
        ],
        equipment: [
            
        ],
        style: "accessory"
    },
    {
        name: "Plank plate slides",
        bodyparts: [
            "core"
        ],
        equipment: [
            "weight plate"
        ],
        style: "accessory"
    },
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
