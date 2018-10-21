import React, { Component } from "react";
import TimeOptions from "../TimeOptionsForm";
import PurposeOptions from "../PurposeOptions";
import Equipment from "../Equipment";
import BodyParts from "../BodyParts";
import API from "../utils/API"

class WODoptions extends Component {
  // state = {
  //   time: "",
  //   purpose: "",
  //   bodyparts: [],
  //   equipment: []
  // }
  
handleFormSubmit = event => {
  event.preventDefault()

  // this.setState(

  // )

  API.postWorkoutOptions({
    time: this.state.time,
    purpose: this.state.purpose,
    bodyparts: this.state.bodyparts,
    equipment: this.state.equipment
  })
  
}

render() {
  console.log(this.state)
  return(

    <div>
      <h1>Pick your options</h1>
      <p>
        What do you want to do
      </p>
    <TimeOptions
     />
    <PurposeOptions />
    <Equipment />
    <BodyParts />
    <button onClick={this.handleFormSubmit}>Workout Now</button>
    </div>
    );
  };
}
export default WODoptions;
