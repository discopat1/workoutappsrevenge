const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userProfileSchema = new Schema({
  name: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  oneRepMax:  { type: Schema.Types.ObjectId, ref: "OneRepMax" },
  workoutHistory: [
    {
      type: Schema.Types.ObjectId, 
      ref: "WorkoutInput" 
    }
  ]
});


const UserProfile = mongoose.model("UserProfile", userProfileSchema);

module.exports = UserProfile;
