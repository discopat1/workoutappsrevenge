const mongoose = require("mongoose");
// const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema;

const exerciseListSchema = new Schema({
  name: { type: String, required: true },
  bodyparts: [String],
  equipment: [String],
  style: { type: String, required: true },
  weight: {type: Number},
  reps: { type: String }
});


// counterSchema.plugin(autoIncrement.plugin, "ExerciseList");
// counterSchema.plugin(autoIncrement.plugin, 'Counter');
// var Counter = mongoose.model('Counter', CounterSchema);
const ExerciseList = mongoose.model("ExerciseList", exerciseListSchema);

module.exports = ExerciseList;
