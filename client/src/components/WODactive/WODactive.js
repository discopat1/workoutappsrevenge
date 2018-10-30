import React, { Component }  from "react";
import WODForm from "../WorkoutInputForm";
import API from "../utils/API"
import DisplayExercises from "../DisplayExercises/Index";
import Navbar from "../Navbar";
import auth0Client from "../Auth";


class WODactive extends Component {
  constructor(props) {
    super(props)
    this.state = {
    finishedExercises: [],
    id: ""
    }
    this.addExercise = this.addExercise.bind(this);
    this.getReps = this.getReps.bind(this);
  }
    
  componentDidMount() {
    if(auth0Client.isAuthenticated()){
      this.setState({id:auth0Client.getUserId()});
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

  getReps = () => {
    const purpose = sessionStorage.getItem('purpose');
        if (purpose === 'speed') {
            return '3-5'
        } else if (purpose === 'strength') {
            return '8-10'
        } else if (purpose === 'sculpt') {
            return '10-15'
        }
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
    const id = this.state.id;
    // const id = "5bd5e745e3128c3b7c65e888";
    console.log(this.state.finishedExercises);
    return (
        <div>
          <Navbar />
          <h1>Here's your workout</h1>
          <p>
            Lift heavy stuff
          </p>
          <DisplayExercises 
          getReps={this.getReps}/>
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
          </ul>
          <form>
          <button onClick={() =>{this.handleSubmitForm(id)}}>Save workout</button>
          </form>
        </div>
      )
    };
  }
    

export default WODactive;
