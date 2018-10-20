import React from "react";

class Equipment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bench: false,
      dumbell: false,
      barbell: false,
      kettlebell: false,
      ghdbench: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <h2>What equipment do you have available?</h2>
        <label>
          Bench
          <input
            name="bench"
            type="checkbox"
            value="bench"
            checked={this.state.bench}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
        Dumbell
          <input
            name="dumbell"
            type="checkbox"
            value="dumbell"
            checked={this.state.dumbell}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Barbell
          <input
            name="barbell"
            type="checkbox"
            value="barbell"
            checked={this.state.barbell}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}


export default Equipment;