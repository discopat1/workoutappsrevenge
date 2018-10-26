import React, { Component } from "react";
import TimeOptions from "../TimeOptionsForm";
import PurposeOptions from "../PurposeOptions";
import {equipmentLabels, equipment} from "../Equipment";
import {bodyParts, bodyPartLabels} from "../BodyParts";
import API from "../utils/API"
import { pick } from "lodash";
// import { identity } from "../../../../node_modules/rxjs";
// import one rep id from UserProfile


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
    );
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
    );

  getKeyByTrue = (object) => {
    const newArray = [];
    Object.keys(object).forEach(key => {
      if(object[key]) {
        newArray.push(key)
      }
    })
      return newArray;
    };

    
  
  handleFormSubmit = (id) => {
    const bParts = pick(this.state, ['legs', 'chest', 'posteriorChain', 'back', 'biceps', 'triceps', 'shoulders', 'core']);
    const equip = pick(this.state, ['bench', 'dumbell', 'barbell', 'kettlebell', 'ghdBench', 'playground', 'pullupBar', 'resistanceBand', 'cableMachine', 'legExtension', 'gymnasticRings', 'romanChair', 'physioball']);
    
    // event.preventDefault()
    API.postWorkoutOptions(id,
    {
      time: this.state.time,
      purpose: this.state.purpose,
      bodyparts: this.getKeyByTrue(bParts),
      equipment: this.getKeyByTrue(equip)
    })
    .catch(err => console.log(err));
  }
  
render() {
  const id = "5bca3366bb778d6499944c58";
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
    <button onClick={this.handleFormSubmit(id)}>Workout Now</button>
    </div>
    );
  };
}
export default WODoptions;
