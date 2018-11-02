import axios from "axios";

// axios.get("/api/exercises").then(function(data) {
//   console.log(data);
// })

export default {
  // Gets all exercises
  getExercises: function() {
    return axios.get("/api/exercises");
  },
  estimateOneRep: function(id, formData) {
    return axios.post("/api/exercises/estimateOneRep/" + id, formData)
  },
  actualOneRep: function(id, formData) {
    return axios.post("/api/exercises/ActualOneRep/" + id, formData);
  },

  createProfile: function(formData) {
    return axios.post("/api/exercises/Profile", formData);
  },
  getUserProfile: function(id) {
    return axios.get("/api/exercises/Profile/" + id)
  },
  postWorkoutOptions: function(id, input) {
    return axios.post("/api/exercises/SelectClassic/" + id, input)
  },
  postWorkoutInput: function(id, input) {
    return axios.post("/api/exercises/WorkoutHistory/" + id, input)
  },
  findOneRep: function(id) {
    return axios.get("/api/exercises/ActualOneRep/" + id)
  },
  findHistory: function(input) {
        console.log(input)
    return axios.post("/api/exercises/gethistory", input)
  }
};