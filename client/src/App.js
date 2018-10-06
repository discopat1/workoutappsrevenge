import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import SelfAssess from "./components/pages/SelfAssess";
import UserProfile from "./components/pages/UserProfile";
import Wod from "./components/pages/Wod";
import WorkoutOptions from "./components/pages/WorkoutOptions";


const App = () => (
  <Router>
    <div>
      <NavTabs />
      <Route exact path="/" component={Home} />
      <Route exact path="/selfassess" component={SelfAssess} />
      <Route exact path="/userprofile" component={UserProfile} />
      <Route exact path="/wod" component={Wod} />
      <Route exact path="/workoutoptions" component={WorkoutOptions} />
    </div>
  </Router>
);

export default App;

