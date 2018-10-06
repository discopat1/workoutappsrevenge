const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const oneRepSchema = new Schema({
  pushups: { type: Number, required: true },
  squats: { type: Number, required: true }
});

const SelfAssess = mongoose.model("selfAssess", oneRepSchema);

module.exports = SelfAssess;
