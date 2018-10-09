import axios from "axios";

// axios.get("/api/exercises").then(function(data) {
//   console.log(data);
// })

export default {
  // Gets all exercises
  getExercises: function() {
    return axios.get("/api/exercises");
  },
  saveOneRep: function(oneRepData) {
    return axios.post("/api/exercises/OneRep", oneRepData);
  }
};