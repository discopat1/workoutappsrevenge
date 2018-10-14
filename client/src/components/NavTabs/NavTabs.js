import React from "react";
import { Link } from "react-router-dom";

const NavTabs = () => (


// This is the splash page **************************
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Splash
      </Link>
    </li>

{/* This is the self assessment page ************************** */}
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

{/* This is the Dashboard  page ************************** */}
    <li className="nav-item">
      <Link
        to="/dashboard"
        className={
          window.location.pathname === "/dashboard" ? "nav-link active" : "nav-link"
        }
      >
        Dashboard
      </Link>
    </li>

{/* This is workout active ************************** */}
    <li className="nav-item">
      <Link
        to="/wodactive"
        className={
          window.location.pathname === "/wod" ? "nav-link active" : "nav-link"
        }
      >
        Today's Workout
      </Link>
    </li>

{/* This is the workout options ************************** */}
    <li className="nav-item">
      <Link
        to="/wodoptions"
        className={
          window.location.pathname === "/workoutoptions" ? "nav-link active" : "nav-link"
        }
      >
        Workout Options
      </Link>
    </li>

{/* This is the sign in page ************************** */}
    <li className="nav-item">
      <Link
        to="/SignIn"
        className={
          window.location.pathname === "/SignIn" ? "nav-link active" : "nav-link"
        }
      >
        Sign In
      </Link>
    </li>

    {/* This is the workout history page ************************** */}

    <li className="nav-item">
      <Link
        to="/workoutHistory"
        className={
          window.location.pathname === "/workoutHistory" ? "nav-link active" : "nav-link"
        }
      >
        Workout History
      </Link>
    </li>
  </ul>
);

export default NavTabs;