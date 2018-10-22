import React, { Component } from "react";
import TimeOptions from "../TimeOptionsForm";
import PurposeOptions from "../PurposeOptions";
import {equipmentLabels, equipment} from "../Equipment";
import {bodyParts, bodyPartLabels} from "../BodyParts";
import API from "../utils/API"


class WODoptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      purpose: "",
    };
    // eslint-disable-next-line react/no-direct-mutation-state
    equipment.forEach(e => this.state[e] = false);
    // eslint-disable-next-line react/no-direct-mutation-state
    bodyParts.forEach(b => this.state[b] = false);
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handlePurposeChange = this.handlePurposeChange.bind(this);
    this.handleEquipmentChange = this.handleEquipmentChange.bind(this);
    this.handleBodyPartChange = this.handleBodyPartChange.bind(this);
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

  handleEquipmentChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  handleBodyPartChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };
  renderEquipCheckBox = equipment => (
    <label key={equipment}>
          {equipmentLabels[equipment]}
          <input
            name={equipment}
            type="checkbox"
            value={equipment}
            checked={this.state[equipment]}
            onChange={this.handleEquipmentChange} />
        </label>
    )
    renderBodyCheckBox = bodyPart => (
      <label key={bodyPart}>
            {bodyPartLabels[bodyPart]}
            <input
              name={bodyPart}
              type="checkbox"
              value={bodyPart}
              checked={this.state[bodyPart]}
              onChange={this.handleBodyPartChange} />
          </label>
      )
  
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
    <form>
        <h2>What equipment do you have available?</h2>
        {equipment.map(this.renderEquipCheckBox)}
      </form>
      <form>
        <h2>What bodyparts do you want to work?</h2>
        {bodyParts.map(this.renderBodyCheckBox)}
      </form>
    <button onClick={this.handleFormSubmit}>Workout Now</button>
    </div>
    );
  };
}
export default WODoptions;
