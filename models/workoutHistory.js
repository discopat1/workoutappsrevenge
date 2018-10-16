const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutHistorySchema = new Schema({
  exericse: { type: String, required: true },
  sets: { type: Number, required: true },
  
});

const OneRepMax = mongoose.model("OneRepMax", oneRepSchema);

module.exports = OneRepMax;