import axios from "axios";

export default {
  // Gets all exercises
  getExercises: function() {
    return axios.get("/api/exercises");
  },
  saveOneRep: function(oneRepData) {
    return axios.post("/api/OneRep", oneRepData);
  }
};