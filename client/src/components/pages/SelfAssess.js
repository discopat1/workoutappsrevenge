import React from "react";
import SAForm from "../SelfAssessForm/SelfAssessForm"
import ORForm from "../OneRepForm/OneRepForm";

const SelfAssess = () => (
  <div>
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

export default SelfAssess;
