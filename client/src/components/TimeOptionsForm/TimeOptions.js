import React from "react";

class TimeOptions extends React.Component {
  constructor() {
    super();
    this.state = {
      time: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    
    this.setState({
      time: event.target.value
    });
  }

  render() {
    return (
      <form>
        <h2>How much time do you have?</h2>
        <label>
          5-15 Minutes:
          <input
            name="time"
            type="radio"
            value="1"
            checked={this.state.time === "1"}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
        20-30 Minutes:
          <input
            name="time"
            type="radio"
            value="2"
            checked={this.state.time === "2"}
            onChange={this.handleInputChange} />
        </label>
        <label>
          35-45 Minutes:
          <input
            name="time"
            type="radio"
            value="3"
            checked={this.state.time === "3"}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
        50-60 Minutes:
          <input
            name="time"
            type="radio"
            value="4"
            checked={this.state.time === "4"}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}


export default TimeOptions;
