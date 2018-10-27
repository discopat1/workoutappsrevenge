import React, { component }  from "react";
import WODForm from "../WorkoutInputForm";
import API from "../utils/API"



class WODactive extends component {

  state = {
    finishedExercises: []
  }
  
  addExercise = exercise => {
    console.log(exercise)
    let finishedExercises = [...this.state.finishedExercises, exercise];
    this.setState ({
      finishedExercises: finishedExercises
    })
  }

  // This function actually belongs in active page
  handleFormSubmit = (id) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    // event.preventDefault();
    console.log("hello");
    if (this.state.finishedExercises) {
      API.postWorkoutInput(id,
      {
        finishedExercises: this.state.finishedExercises
      })
      .then(() => this.setState({
        finishedExercises: "",
      }))
      .catch(err => console.log(err));
    }
    if (!this.state.finishedExercises) {
      alert("Input some exercises");
    } else {
      alert("Good Job!");
    }
    
  };

  render() {
    const id = "5bc27db12e7ac5f71a6387ea";
    const exercises = localStorage.getItem("Exercise")
    exercises.map(exercise =>{
      return (
        <div>
          <h1>Here's your workout</h1>
          <p>
            Lift heavy stuff
          </p>
          <div>Exercise: { exercise.name }</div>
          <div>Sets: 3-5</div>
          <div>Reps: { exercise.purpose }</div>
          <div>Weight: { exercise.weight }</div>
          <WODForm />
          <form>
          <button onClick={() =>{this.handleSubmitForm(id)}}>Save workout</button>
          </form>
        </div>
        )
      })
    };
  }
    

export default WODactive;
