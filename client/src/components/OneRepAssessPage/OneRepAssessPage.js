import React from "react";
import SAForm from "../SelfAssessForm";
import ORForm from "../OneRepForm";
import Navbar from "../Navbar";
import "./OneRepAssessPage.css";

const Assessment = () => (
  <React.Fragment>
    <Navbar />

    <div className="ora_container">
      {/* start header  */}
      <div className="ora_header">
        <p>Assessment Page</p>
        {/* end header */}
      </div>
      <div className="ora_article">
        <div className="ora_box1">
            <SAForm />
        </div>

        <div className="ora_box2">
            <ORForm />
        </div>

        {/* end article */}
      </div>
    </div>
  </React.Fragment>
);

export default Assessment;
