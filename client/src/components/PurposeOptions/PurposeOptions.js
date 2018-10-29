import React from "react";
import "./PurposeOptions.css";

class PurposeOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      purpose: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    this.props.onPurposeChange(event.target.value);
  }

  render() {
    return (
      <form>
        <h3>What is your goal for today's workout?</h3>

        <input
          name="purpose"
          type="radio"
          value="speed"
          checked={this.state.purpose === "speed"}
          onChange={this.handleInputChange}
        />
        <label>Speed</label>
        <br />

        <input
          name="purpose"
          type="radio"
          value="strength"
          checked={this.state.purpose === "strength"}
          onChange={this.handleInputChange}
        />
        <label>Strength</label>
        <br />

        <input
          name="purpose"
          type="radio"
          value="sculpt"
          checked={this.state.purpose === "sculpt"}
          onChange={this.handleInputChange}
        />
        <label>Sculpt</label>
      </form>
    );
  }
}

export default PurposeOptions;
