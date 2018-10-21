import React, { Component } from "react";
import TimeOptions from "../TimeOptionsForm";
import PurposeOptions from "../PurposeOptions";
import Equipment from "../Equipment";
import BodyParts from "../BodyParts";
import API from "../utils/API"

class WODoptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      purpose: "",
      bodyparts: [],
      equipment: []
    };
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handlePurposeChange = this.handlePurposeChange.bind(this);
  }
  handleTimeChange(timeValue) {
    this.setState({
      time: timeValue
    });
  };
  handlePurposeChange(purposeValue) {
    this.setState({
      purpose: purposeValue
    });
  };
  handleFormSubmit = event => {
    event.preventDefault()


    API.postWorkoutOptions({
      time: this.state.time,
      purpose: this.state.purpose,
      bodyparts: this.state.bodyparts,
      equipment: this.state.equipment
    })
    
  }

render() {
  console.log("STATE == == == ", this.state)
  return(

    <div>
      <h1>Pick your options</h1>
      <p>
        What do you want to do
      </p>
    <TimeOptions
      onTimeChange={this.handleTimeChange} />
    <PurposeOptions 
      onPurposeChange={this.handlePurposeChange} />
    <Equipment />
    <BodyParts />
    <button onClick={this.handleFormSubmit}>Workout Now</button>
    </div>
    );
  };
}
export default WODoptions;
