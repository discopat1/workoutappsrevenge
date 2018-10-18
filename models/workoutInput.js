const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutInputSchema = new Schema({
  exercise1: {
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: [Number],
    weight: [Number]
  },
  exercise2: {
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: [Number],
    weight: [Number]
  },
  exercise3: {
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: [Number],
    weight: [Number]
  },
  exercise4: {
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: [Number],
    weight: [Number]
  },
  exercise5: {
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: [Number],
    weight: [Number]
  },
  exercise6: {
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: [Number],
    weight: [Number]
  },
  exercise7: {
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: [Number],
    weight: [Number]
  },
  exercise8: {
    name: { type: String, required: true },
    sets: { type: Number, required: true },
    reps: [Number],
    weight: [Number]
  }
  
});

const WorkoutInput = mongoose.model("WorkoutInput", workoutInputSchema);

module.exports = WorkoutInput;