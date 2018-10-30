import React, { Component } from "react";
import "./SelfAssessForm.css";
import API from "../utils/API";
import auth0Client from "../Auth";
import { Link } from "react-router-dom";

class SAForm extends Component {
    state = {
      bench: "",
      squat: "",
      weight: "",
      id: auth0Client.getUserId()
    };
    
  handleInputChange = event => {

    let value = event.target.value;
    const cleanNumber = parseInt(value)
    const name = event.target.name;
    // Updating the input's state
    if (Number.isInteger(cleanNumber) || value.length === 0) {
      // Updating the input's state
        this.setState({
          [name]: value
        });
      } 
    };

  handleFormSubmit = id => {
    if (this.state.bench && this.state.squat && this.state.weight) {
          API.estimateOneRep(id,
          {
            bench: parseInt(this.state.bench),
            squat: parseInt(this.state.squat),
            weight: parseInt(this.state.weight)
          })
          .catch(err => console.log(err));
            
        } else {
          alert("Fill out your max reps please!");
        }
    
  };

  render() {
    const id = this.state.id;
    // Notice how each input has a `value`, `name`, and `onChange` prop
    // const id = auth0.getUserId();
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
          <button onClick={() =>{this.handleFormSubmit(id)}}><Link to="/dashboard">Submit</Link></button>
        </form>
      </div>
    );
  }
}

export default SAForm;