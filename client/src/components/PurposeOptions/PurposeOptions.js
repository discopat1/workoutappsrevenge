import React from "react";

class PurposeOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      purpose: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    
    this.setState({
      purpose: event.target.value
    });
  }

  render() {
    return (
      <form>
        <h2>What is your goal for today's workout?</h2>
        <label>
          Speed:
          <input
            name="purpose"
            type="radio"
            value="speed"
            checked={this.state.purpose === "speed"}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
        Strength:
          <input
            name="purpose"
            type="radio"
            value="strength"
            checked={this.state.purpose === "strength"}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Sculpt:
          <input
            name="purpose"
            type="radio"
            value="sculpt"
            checked={this.state.purpose === "sculpt"}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}


export default PurposeOptions;
