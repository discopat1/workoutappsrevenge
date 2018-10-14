import axios from "axios";

// axios.get("/api/exercises").then(function(data) {
//   console.log(data);
// })

export default {
  // Gets all exercises
  getExercises: function() {
    return axios.get("/api/exercises");
  },
  estimateOneRep: function(formData) {
    return axios.post("/api/exercises/OneRep", formData)
  },
  actualOneRep: function(formData) {
    return axios.post("/api/exercises/ActualOneRep", formData);
  },
  createProfile: function(formData) {
    return axios.post("/api/exercises/Profile", formData);
  }
};