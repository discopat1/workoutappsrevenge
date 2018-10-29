import React from "react";
import "./TimeOptions.css";

class TimeOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
    this.props.onTimeChange(event.target.value);
  }

  render() {
    return (
      <form>
        <h3>How much time do you have?</h3>
        <input
          name="time"
          type="radio"
          value="1"
          checked={this.state.time === "1"}
          onChange={this.handleInputChange}
        />
        <label>10-15 Minutes</label>
        <br />

        <input
          name="time"
          type="radio"
          value="2"
          checked={this.state.time === "2"}
          onChange={this.handleInputChange}
        />
        <label>20-30 Minutes</label>

        <br />

        <input
          name="time"
          type="radio"
          value="3"
          checked={this.state.time === "3"}
          onChange={this.handleInputChange}
        />
        <label>35-45 Minutes</label>

        <br />

        <input
          name="time"
          type="radio"
          value="4"
          checked={this.state.time === "4"}
          onChange={this.handleInputChange}
        />
        <label>50-60 Minutes</label>
      </form>
    );
  }
}

export default TimeOptions;
