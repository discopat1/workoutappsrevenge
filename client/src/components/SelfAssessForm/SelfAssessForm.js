import React, { Component } from "react";
import "./SelfAssessForm.css";
import API from "../utils/API";

class SAForm extends Component {
  // Setting the component's initial state
  state = {
    bench: "",
    squat: "",
    weight: ""
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
    console.log(this.state)
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.pushups || !this.state.squats || !this.state.weight) {
      alert("Fill out your max reps please!");
    } else {
      alert("Good Job!");
    }

    this.setState({
      bench: "",
      squat: "",
      weight: ""
    });
    
    
    if (this.state.bench && this.state.squat && this.state.weight) {
      API.estimateOneRep({
        bench: this.state.bench,
        squat: this.state.squat,
        weight: this.state.weight
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
            name="pushups"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Max pushups!"
          />
          <input
            value={this.state.squat}
            name="squats"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Max squats!"
          />
          <input
            value={this.state.weight}
            name="weight"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Your bodyweight!"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SAForm;