import axios from "axios";

// axios.get("/api/exercises").then(function(data) {
//   console.log(data);
// })

export default {
  // Gets all exercises
  getExercises: function() {
    return axios.get("/api/exercises");
  },
  estimateOneRep: function() {
    return axios.post("/api/exercises/OneRep")
  },
  actualOneRep: function() {
    return axios.post("/api/exercises/ActualOneRep");
  }
};