import React, { Component } from "react";
import "./SelfAssessForm.css";
import API from "../utils/API";

class SAForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bench: "",
      squat: "",
      weight: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
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
    
    if (this.state.bench && this.state.squat && this.state.weight) {
          API.estimateOneRep({
            bench: this.state.bench,
            squat: this.state.squat,
            weight: this.state.weight
          }).then(() => this.setState({
            bench: "",
            squat: "",
            weight: ""
          }))
            .catch(err => console.log(err));
        }
    // if (!this.state.bench || !this.state.squat || !this.state.weight) {
    //   alert("Fill out your max reps please!");
    // } else {
    //   alert("Good Job!");
    // }
    
  };
  

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          How many reps in one set?
        </p>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <label htmlFor="assessment">Max Pushups:</label>
          <input
            name="bench"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Max pushups!"
          />
          <label htmlFor="assessment">Max Squats:</label>
          <input
            name="squat"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Max squats!"
          />
          <label htmlFor="assessment">Body Weight:</label>
          <input
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