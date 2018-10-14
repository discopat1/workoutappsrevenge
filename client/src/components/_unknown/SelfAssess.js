import React, { Component } from "react";
import SAForm from "../SelfAssessForm/SelfAssessForm"
import ORForm from "../OneRepForm/OneRepForm";
// Create this as a class component 
// One form needs to be filled out but only one
class SelfAssess extends Component {

render() {
  return (
    <div>
      <h1>Hello {this.props.name}</h1>
      <h1>How strong are you, sucka?</h1>
      <h2>
        INput or take test
      </h2>
      <h3>
        Take test
      </h3>
      <SAForm />
      <h3>
        What is your 1RM
      </h3>
      <ORForm />
    </div>
  );
}
}
// Create a separate component (possibly the user profile- just make it a small component that can be displayed on any page) that displays One Rep max to the user on completion of either form
// Also gives option to update self assessment or ORM
export default SelfAssess;
