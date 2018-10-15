import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import SelfAssess from "./components/pages/SelfAssess";
import UserProfile from "./components/pages/UserProfile";
import Wod from "./components/pages/Wod";
import WorkoutOptions from "./components/pages/WorkoutOptions";
import SignIn from "./components/pages/SignIn";
import WorkoutHistory from "./components/pages/WorkoutHistory";
import Navbar from "./components/Navbar";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route exact path='/dashboard' component={UserProfile}/>
      <Route exact path='/wod' component={Wod}/>
      <Route exact path='/selfassess' component={SelfAssess}/>
      <Route exact path='/wod' component={Wod}/>

    </div>
  </Router>
);

export default App;

