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
            "posteriorChain",
            "back"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistanceBand"
        ],
        style: "compound"
    },
    {
        name: "Romanian Deadlift",
        bodyparts: [
            "legs",
            "posteriorChain",
            "back"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistanceBand"
        ],
        style: "compound"
    },
    {
        name: "Single-Leg Romanian Deadlift",
        bodyparts: [
            "legs",
            "posteriorChain",
            "back"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistanceBand"
        ],
        style: "compound"
    },
    {
        name: "Sumo Deadlift",
        bodyparts: [
            "legs",
            "posteriorChain",
            "back"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistanceBand"
        ],
        style: "compound"
    },
    {
        name: "Hip Thrusts",
        bodyparts: [
            "legs",
            "posteriorChain",
            "back",
            "cableMachine"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistanceBand",
            "physioball"
        ],
        style: "compound"
    },
    {
        name: "Snatch",
        bodyparts: [
            "legs",
            "posteriorChain",
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
            "posteriorChain",
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
            "posteriorChain",
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
            "resistanceBand"
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
            "resistanceBand"
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
            "resistanceBand"
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
            "posteriorChain"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistanceBand"
        ],
        style: "compound"
    },
    {
        name: "Step-ups",
        bodyparts: [
            "legs",
            "posteriorChain"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistanceBand"
        ],
        style: "compound"
    },
    {
        name: "Bulgarian spilt squats",
        bodyparts: [
            "legs",
            "posteriorChain"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistanceBand"
        ],
        style: "compound"
    },
    {
        name: "Calf raises",
        bodyparts: [
            "legs",
            "posteriorChain"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "kettlebell",
            "resistanceBand"
        ],
        style: "accessory"
    },
    {
        name: "Leg Extensions",
        bodyparts: [
            "legs"
        ],
        equipment: [
            "legExtension",
            "resistanceBand"
        ],
        style: "accessory"
    },
    {
        name: "GHD Hamstring Curls",
        bodyparts: [
            "legs",
            "posteriorChain"
        ],
        equipment: [
            "ghdBench"
        ],
        style: "accessory"
    },
    {
        name: "Leg Abductions",
        bodyparts: [
            "legs",
            "posteriorChain"
        ],
        equipment: [
            "resistanceBand"
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
            "cableMachine"
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
            "cableMachine"
        ],
        style: "accessory"
    },
    {
        name: "Reverse flys",
        bodyparts: [
            "shoulders",
            "back",
            "posteriorChain"
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "resistanceband",
            "cableMachine",
            "ghdBench"
        ],
        style: "accessory"
    },
    {
        name: "Shrugs",
        bodyparts: [
            "shoulders",
            "back",
            "posteriorChain"
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "barbell",
            "resistanceBand"
        ],
        style: "accessory"
    },
    {
        name: "Facepulls",
        bodyparts: [
            "shoulders",
            "back",
            "posteriorChain"
        ],
        equipment: [
            "gymnastic_rings",
            "ghd_bench",
            "cable_machine",
            "resistanceBand"
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
            "resistanceBand"
        ],
        style: "accessory"
    },
    {
        name: "Back extension",
        bodyparts: [
            "posteriorChain",
            "back"
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "resistanceBand",
            "ghdBench"
        ],
        style: "accessory"
    },
    {
        name: "Straight arm pull down",
        bodyparts: [
            "posteriorChain",
            "back",
            "triceps"
        ],
        equipment: [
            "cableMachine",
            "resistanceBand"
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
            "cableMachine"
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
            "gymnasticRings",
            "roman chair",
            "playground"
        ],
        style: "compound"
    },
    {
        name: "Barbell curls",
        bodyparts: [
            "biceps"
        ],
        equipment: [
            "barbell"
        ],
        style: "accessory"
    },
    {
        name: "Dumbell curls",
        bodyparts: [
            "biceps"
        ],
        equipment: [
            "dumbell",
            "kettlebell"
        ],
        style: "accessory"
    },
    {
        name: "Hammer curls",
        bodyparts: [
            "biceps"
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "resistanceBand"
        ],
        style: "accessory"
    },
    {
        name: "Elevator curls",
        bodyparts: [
            "biceps"
        ],
        equipment: [
            "cableMachine",
            "resistanceBand"
        ],
        style: "accessory"
    },
    {
        name: "Bentover rows",
        bodyparts: [
            "posteriorChain",
            "back",
            "biceps"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "cableMachine",
            "kettlebell",
            "resistanceBand",
        ],
        style: "compound"
    },
    {
        name: "One arm rows",
        bodyparts: [
            "posteriorChain",
            "back",
            "biceps"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "cableMachine",
            "kettlebell",
            "resistanceBand",
            "bench"
        ],
        style: "compound"
    },
    {
        name: "Inverted rows",
        bodyparts: [
            "posteriorChain",
            "back",
            "biceps"
        ],
        equipment: [
            "gymnasticRings",
            "playground",
            "pullupBar"
        ],
        style: "compound"
    },
    {
        name: "Deadrows",
        bodyparts: [
            "posteriorChain",
            "legs",
            "back",
            "biceps"
        ],
        equipment: [
            "barbell",
            "dumbell",
            "cableMachine",
            "kettlebell",
            "resistanceBand"
        ],
        style: "compound"
    },
    {
        name: "Seated rows",
        bodyparts: [
            "posteriorChain",
            "back",
            "biceps"
        ],
        equipment: [
            "cableMachine",
            "resistanceBand"
        ],
        style: "compound"
    },
    {
        name: "GHD rows",
        bodyparts: [
            "posteriorChain",
            "back",
            "biceps"
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "barbell",
            "resistanceBand",
            "ghdBench"
        ],
        style: "compound"
    },
    {
        name: "Isometric YWT's",
        bodyparts: [
            "posteriorChain",
            "back",
            "shoulders"
        ],
        equipment: [
            "dumbell",
            "kettlebell",
            "resistanceBand",
            "ghdBench",
            "bench"
        ],
        style: "accessory"
    },
    {
        name: "Overhand pull-ups",
        bodyparts: [
            "posteriorChain",
            "back",
            "biceps"
        ],
        equipment: [
            "pullupBar",
            "gymnasticRings",
            "playground"
        ],
        style: "compound"
    },
    {
        name: "Underhand pull-ups",
        bodyparts: [
            "posteriorChain",
            "back",
            "biceps"
        ],
        equipment: [
            "pullupBar",
            "gymnasticRings",
            "playground"
        ],
        style: "compound"
    },
    {
        name: "Switch-grip pull-ups",
        bodyparts: [
            "posteriorChain",
            "back",
            "biceps"
        ],
        equipment: [
            "pullupBar",
            "gymnasticRings",
            "playground"
        ],
        style: "compound"
    },
    {
        name: "Internal rotater pull-ups",
        bodyparts: [
            "posteriorChain",
            "back",
            "biceps"
        ],
        equipment: [
            "gymnasticRings",
        ],
        style: "compound"
    },
    {
        name: "Neutral-grip pull-ups",
        bodyparts: [
            "posteriorChain",
            "back",
            "biceps"
        ],
        equipment: [
            "pullupBar",
            "gymnasticRings",
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
            "resistanceBand",
            "cableMachine"
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
            "resistanceBand",
            "cableMachine"
        ],
        style: "accessory"
    },
    {
        name: "Tricep pushdowns",
        bodyparts: [
            "triceps"
        ],
        equipment: [
            "resistanceBand",
            "cableMachine"
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
            "pullupBar",
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
            "weightplate"
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

  module.exports = exerciseSeed;