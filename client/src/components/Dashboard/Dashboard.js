import React from "react";
import UserProfile from "../ProfileCard";
import Navbar from "../Navbar";

const Dash = () => (
  <div>
    <Navbar />
    <h1>Dashboard page</h1>
    <p>
      Hi, I'm Dashboard.
    </p>
  <UserProfile />

  </div>
);

export default Dash;
