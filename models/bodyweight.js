const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bodyweightSchema = new Schema({
  name: { type: String, required: true },
  bodyparts: [String],
  style: { type: String, required: true }
});

const Bodyweight = mongoose.model("BodyweightList", bodyweightSchema);

module.exports = Bodyweight;
