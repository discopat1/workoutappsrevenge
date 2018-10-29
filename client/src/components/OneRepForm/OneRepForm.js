import React, { Component } from "react";
import "./OneRepForm.css";
import API from "../utils/API";
import auth0 from "../Auth"

class ORForm extends Component {
  state = {
      bench: "",
      squat: "",
    };
  
   handleInputChange = event => {
    
    let value = event.target.value;
    const cleanNumber = parseInt(value)
    const name = event.target.name;
    if (Number.isInteger(cleanNumber) || value.length === 0) {
    // Updating the input's state
      this.setState({
        [name]: value
      });
    } 
  };
   handleFormSubmit = (id) => {
    if (this.state.bench && this.state.squat) {
      API.actualOneRep(id,
      {
        bench: parseInt(this.state.bench),
        squat: parseInt(this.state.squat)
      })
      .then(() => this.setState({
        bench: "",
        squat: "",
      }))
      window.location.href = "/wodoptions"
      .catch(err => console.log(err));
    }
    if (!this.state.bench || !this.state.squat) {
      alert("Fill out your one rep max please!");
    } else {
      alert("Good Job!");
    }
    
  };

   render() {
     const id = "5bd5e745e3128c3b7c65e888"
    //  const id = auth0.getUserId();
    //  console.log('client ID', auth0.getUserId());
    return (
      <div>
        <p>
          One rep max?
        </p>
        <form className="form">
          <input
            value={this.state.bench}
            name="bench"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Bench 1RM!"
          />
          <input
            value={this.state.squat}
            name="squat"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Squat 1RM!"
          />
          <button onClick={() =>{this.handleFormSubmit(id)}}>Submit</button>
        </form>
      </div>
    );
  }
}
 export default ORForm; 