import React, { Component } from "react";
import "./Form.css";
import API from "../utils/API";

class Form extends Component {
  // Setting the component's initial state
  state = {
    name: "",
    email: "",
    password: ""
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;

    if (name === "password") {
      value = value.substring(0, 15);
    }
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Fill out your user info please!");
    } else if (this.state.password.length < 6) {
      alert(
        `Choose a more secure password ${this.state.name}`
      );
    } else {
      alert(`Hello ${this.state.name}`);
    }

    this.setState({
      name: "",
      email: "",
      password: ""
    });
    if (this.state.name && this.state.email && this.state.password) {
      API.createProfile({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
        .catch(err => console.log(err));
    }
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Name"
          />
          <input
            value={this.state.email}
            name="email"
            onChange={this.handleInputChange}
            type="text"
            placeholder="email"
          />
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;