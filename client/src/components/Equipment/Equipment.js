import React from "react";

const equipmentLabels = {
      bench: "Bench",
      dumbell: "Dumbell",
      barbell: "Barbell",
      kettlebell: "Kettlebell",
      ghdBench: "GHD Bench",
      playground: "Playground",
      pullupBar: "Pull-up Bar",
      resistanceBand: "Resistance Bar",
      cableMachine: "Cable Machine",
      legExtension: "Leg Extension Machine",
      gymnasticRings: "Gymnastic Rings",
      romanChair: "Roman Chair",
      physioball: "Physioball"
}

const equipment = ['bench', 'dumbell', 'barbell', 'kettlebell', 'ghdBench', 'playground', 'pullupBar', 'resistanceBand', 'cableMachine', 'legExtension', 'gymnasticRings', 'romanChair', 'physioball'];

class Equipment extends React.Component {
  constructor(props) {
    super(props);
    // set all equipment checkboxes to false
    this.state = {};
    // eslint-disable-next-line react/no-direct-mutation-state
    equipment.forEach(b => this.state[b] = false);


    





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

  renderCheckBox = equipment => (
    <label key={equipment}>
          {equipmentLabels[equipment]}
          <input
            name={equipment}
            type="checkbox"
            value={equipment}
            checked={this.state[equipment]}
            onChange={this.handleInputChange} />
        </label>
    )
  render() {
    return (
      <form>
        <h2>What equipment do you have available?</h2>
        {equipment.map(this.renderCheckBox)}
      </form>
    );
  }
}


export default Equipment;
