import React, { Component }  from "react";
import WODForm from "../WorkoutInputForm";
import API from "../utils/API"
import DisplayExercises from "../DisplayExercises/Index";
import Navbar from "../Navbar";
import auth0Client from "../Auth";
import { Link } from "react-router-dom";


class WODactive extends Component {
  constructor(props) {
    super(props)
    this.state = {
    finishedExercises: [],
    id: ""
    }
    this.addExercise = this.addExercise.bind(this);
  }
    
  componentDidMount() {
    if(auth0Client.isAuthenticated()){
      this.setState({id:auth0Client.getUserId()});
    } 
    else {
      this.setState({id: "5bd6993dc3094a3a0d39b135"})
    }
  }
  
  
  addExercise = exercise => {
    console.log("exercise===", exercise)
    exercise.id = Math.random()
    let finishedExercises = [...this.state.finishedExercises, exercise];
    this.setState ({
      finishedExercises: finishedExercises
    })
  }

  
  

  // This function actually belongs in active page
  handleFormSubmit = (id) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    console.log("after prevent");
    if (this.state.finishedExercises) {
      API.postWorkoutInput(id,
      {
        exercise1: this.state.finishedExercises[0],
        exercise2: this.state.finishedExercises[1],
        exercise3: this.state.finishedExercises[2],
        exercise4: this.state.finishedExercises[3],
        exercise5: this.state.finishedExercises[4],
        exercise6: this.state.finishedExercises[5],
        exercise7: this.state.finishedExercises[6],
        exercise8: this.state.finishedExercises[7]
      })
      .catch(err => console.log(err));
    } else {
      alert("Input some exercises");
    }
    
  };

  render() {
    const id = this.state.id;
    console.log("user id", id)
    console.log("finished exercise1", this.state.finishedExercises[0]);
    return (
        <div>
          <Navbar />
          <h1>Here's your workout</h1>
          <p>
            Lift heavy stuff
          </p>
          <DisplayExercises />
          <WODForm 
          addExercise={this.addExercise}/>
          <ul>
          {this.state.finishedExercises.map(exercise => (
            <li key={exercise.id}>
              Exercise: {exercise.name}
              <br/>
              Sets: {exercise.sets}
              <br/>
              Reps: {exercise.reps}
              <br/>
              Weight: {exercise.weight}
              <br/>
            </li>
            ))}
            <br/>
          </ul>
          <button onClick={()=> {this.handleFormSubmit(id)}}><Link to="/dashboard">Save workout</Link></button>
        </div>
      )
    };
  }
    

export default WODactive;
