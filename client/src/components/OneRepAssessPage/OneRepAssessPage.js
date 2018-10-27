import React from "react";
import SAForm from "../SelfAssessForm";
import ORForm from "../OneRepForm";
import Navbar from "../Navbar";

const Assessment = () => (
  
          <div>
            <Navbar />
            <h1>Assessment Page</h1>
            <p>
              Hi, I'm Assessment page.
            </p>
            <SAForm />
            <ORForm />
          </div>
      )
  
export default Assessment;
