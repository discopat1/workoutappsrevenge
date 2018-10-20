import React from "react";
import TimeOptions from "../TimeOptionsForm";
import PurposeOptions from "../PurposeOptions";
import Equipment from "../Equipment";

const WODoptions = () => (
  <div>
    <h1>Pick your options</h1>
    <p>
      What do you want to do
    </p>
  <TimeOptions />
  <PurposeOptions />
  <Equipment />
  </div>
);

export default WODoptions;
