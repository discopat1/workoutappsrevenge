import React from "react";

const bodyPartLabels = {
  legs: "Legs",
  posteriorChain: "Posterior Chain",
  chest: "Chest",
  back: "Back",
  biceps: "Biceps",
  triceps: "Triceps",
  core: "Core"
}

const bodyParts = ['legs', 'posteriorChain', 'chest', 'back', 'biceps', 'triceps', 'core'];

class BodyParts extends React.Component {
  constructor(props) {
    super(props);
    // set all body part checkboxes to false
    this.state = {};
    // eslint-disable-next-line react/no-direct-mutation-state
    bodyParts.forEach(b => this.state[b] = false);



    // this.state = [];



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
  renderCheckBox = bodyPart => (
    <label key={bodyPart}>
          {bodyPartLabels[bodyPart]}
          <input
            name={bodyPart}
            type="checkbox"
            value={bodyPart}
            checked={this.state[bodyPart]}
            onChange={this.handleInputChange} />
        </label>
    )
    
  render() {
    console.log(this.state)
    return (
      <form>
        <h2>What bodyparts do you want to work?</h2>
        {bodyParts.map(this.renderCheckBox)}
      </form>
    );
  }
}


export default BodyParts;
