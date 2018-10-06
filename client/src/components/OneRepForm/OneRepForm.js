import React, { Component } from "react";
import "./Form.css";
import API from "../utils/API";

class ORForm extends Component {
  // Setting the component's initial state
  state = {
    bench: "",
    squat: "",
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.pushups || !this.state.squats) {
      alert("Fill out your one rep max please!");
    } else {
      alert("Good Job!");
    }

    this.setState({
      bench: "",
      squat: "",
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.bench && this.state.squat) {
      API.saveOneRep({
        bench: this.state.bench,
        squat: this.state.squat
      })
        .catch(err => console.log(err));
    }
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          How many reps in one set?
        </p>
        <form className="form">
          <input
            value={this.state.bench}
            name="bench"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Bench 1RM!"
          />
          <input
            value={this.state.squat}
            name="squat"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Squat 1RM!"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default ORForm;