const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseListSchema = new Schema({
  name: { type: String, required: true },
  bodyparts: [String],
  equipment: [String],
  style: { type: String, required: true }
});

const ExerciseList = mongoose.model("ExerciseList", exerciseListSchema);

module.exports = ExerciseList;
