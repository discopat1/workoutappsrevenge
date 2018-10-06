import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/selfassess"
        className={
          window.location.pathname === "/selfassess" ? "nav-link active" : "nav-link"
        }
      >
        Self Assessment
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/userprofile"
        className={
          window.location.pathname === "/userprofile" ? "nav-link active" : "nav-link"
        }
      >
        User Profile
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/wod"
        className={
          window.location.pathname === "/wod" ? "nav-link active" : "nav-link"
        }
      >
        Today's Workout
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/workoutoptions"
        className={
          window.location.pathname === "/workoutoptions" ? "nav-link active" : "nav-link"
        }
      >
        Options
      </Link>
    </li>
  </ul>
);

export default NavTabs;