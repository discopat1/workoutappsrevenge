const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const oneRepSchema = new Schema({
  bench: { type: Number, required: true },
  squat: { type: Number, required: true }
});

const SelfAssess = mongoose.model("SelfAssess", oneRepSchema);

module.exports = SelfAssess;
