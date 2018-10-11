const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maxRepSchema = new Schema({
  bench: { type: Number, required: true },
  squat: { type: Number, required: true }
});

const SelfAssess = mongoose.model("SelfAssess", maxRepSchema);

module.exports = SelfAssess;
