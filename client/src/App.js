import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Splash from "./components/SplashPage";
import Dash from "./components/Dashboard";


import SAForm from "./components/SelfAssessForm";
import UserProfile from "./components/profileCard/profileCard";
import Wod from "./components/pages/Wod";
import WorkoutOptions from "./components/pages/WorkoutOptions";
import WorkoutHistory from "./components/pages/WorkoutHistory";


const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Splash} />
      <Route exact path="/dashboard" component={Dash} />


      <Route exact path="/selfassess" component={SelfAssess} />
      
      <Route exact path="/wod" component={Wod} />
      <Route exact path="/workoutoptions" component={WorkoutOptions} />
      <Route exact path="/SignIn" component={SignIn} />
      <Route exact path="/workoutHistory" component={WorkoutHistory} />
    </div>
  </Router>
);

export default App;

