import React, { Component } from "react";
import TimeOptions from "../TimeOptionsForm";
import PurposeOptions from "../PurposeOptions";
import { equipmentLabels, equipment } from "../Equipment";
import { bodyParts, bodyPartLabels } from "../BodyParts";
import API from "../utils/API";
import { pick } from "lodash";
import Navbar from "../Navbar";
import "./WODoptions.css";
import Button from "@material-ui/core/Button";
// import { identity } from "../../../../node_modules/rxjs";
// import one rep id from UserProfile

class WODoptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "",
      purpose: ""
    };
    // eslint-disable-next-line react/no-direct-mutation-state
    equipment.forEach(e => (this.state[e] = false));
    // eslint-disable-next-line react/no-direct-mutation-state
    bodyParts.forEach(b => (this.state[b] = false));
    this.handleTimeChange = this.handleTimeChange.bind(this);
    this.handlePurposeChange = this.handlePurposeChange.bind(this);
    this.handleEquipmentChange = this.handleEquipmentChange.bind(this);
    this.handleBodyPartChange = this.handleBodyPartChange.bind(this);
  }
  handleTimeChange(timeValue) {
    this.setState({
      time: timeValue
    });
  }
  handlePurposeChange(purposeValue) {
    this.setState({
      purpose: purposeValue
    });
  }

  handleEquipmentChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleBodyPartChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  renderEquipCheckBox = equipment => (
    <React.Fragment>
      <input
        name={equipment}
        type="checkbox"
        value={equipment}
        checked={this.state[equipment]}
        onChange={this.handleEquipmentChange}
      />{" "}
      <label key={equipment}>{equipmentLabels[equipment]}</label>
      &nbsp;&nbsp;&nbsp;
    </React.Fragment>
  );
  renderBodyCheckBox = bodyPart => (
    <React.Fragment>
      <input
        name={bodyPart}
        type="checkbox"
        value={bodyPart}
        checked={this.state[bodyPart]}
        onChange={this.handleBodyPartChange}
      />
      <label key={bodyPart}>{bodyPartLabels[bodyPart]}</label>
      &nbsp;&nbsp;&nbsp;
    </React.Fragment>
  );

  getKeyByTrue = object => {
    const newArray = [];
    Object.keys(object).forEach(key => {
      if (object[key]) {
        newArray.push(key);
      }
    });
    return newArray;
  };

  handleFormSubmit = id => {
    const bParts = pick(this.state, [
      "legs",
      "chest",
      "posteriorChain",
      "back",
      "biceps",
      "triceps",
      "shoulders",
      "core"
    ]);
    const equip = pick(this.state, [
      "bench",
      "dumbell",
      "barbell",
      "kettlebell",
      "ghdBench",
      "playground",
      "pullupBar",
      "resistanceBand",
      "cableMachine",
      "legExtension",
      "gymnasticRings",
      "romanChair",
      "physioball"
    ]);

    API.postWorkoutOptions(id, {
      time: this.state.time,
      purpose: this.state.purpose,
      bodyparts: this.getKeyByTrue(bParts),
      equipment: this.getKeyByTrue(equip)
    }).then(data => {
      const compound = data.data.dbCompound;
      const accessory = data.data.dbAccessory;
      const exerciseArr = compound.concat(accessory);
      console.log("full exercise array", exerciseArr);
      console.log("purpose,", this.state.purpose);
      localStorage.setItem("exercises", JSON.stringify(exerciseArr));
      sessionStorage.setItem("purpose", this.state.purpose);
    });
  };

  render() {
    const id = "5bca3366bb778d6499944c58";
    return (
      <React.Fragment>
        <Navbar />

        <div className="container">
          {/* start header  */}
          <div className="header">
            <h1>Pick your options</h1>
            {/* end header */}
          </div>
          <div className="article">
            <div className="box1">
              <TimeOptions onTimeChange={this.handleTimeChange} />

              <PurposeOptions onPurposeChange={this.handlePurposeChange} />
            </div>

            <div className="box2">
              <form>
                <h3>What equipment do you have available?</h3>
                {equipment.map(this.renderEquipCheckBox)}
              </form>

              <form>
                <h3>What bodyparts do you want to work?</h3>
                {bodyParts.map(this.renderBodyCheckBox)}
              </form>
            </div>

            {/* end article */}
          </div>

          <div className="footer">
            {/* **** button  ******* */}
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.handleFormSubmit(id)}
            >
              Workout Now!
            </Button>

            {/* **** end footer ******* */}
          </div>

          {/* end container */}
        </div>
      </React.Fragment>
    );
  }
}
export default WODoptions;
