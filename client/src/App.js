import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// custom components we created
import Splash from "./components/SplashPage";
import Dash from "./components/Dashboard";
import Assessment from "./components/OneRepAssessPage";
import WODoptions from "./components/WODoptions";
import WODactive from "./components/WODactive";
import Callback from "./components/Callback";
import Logout from "./components/Logout";
import ExerciseList from "./components/ExerciseList"

const App = () => (
  <Router>
    <React.Fragment>
        <div>
          <Route exact path="/" component={Splash} />
          <Route exact path="/dashboard" component={Dash} />
          <Route exact path="/selfassess" component={Assessment} />
          <Route exact path="/wodoptions" component={WODoptions} />
          <Route exact path="/wodactive" component={WODactive} />
          <Route exact path='/callback' component={Callback} />
          <Route exact path='/Logout' component={Logout} />
          <Route exact path='/exerciselist' component={ExerciseList} />
        </div>
    </React.Fragment>
  </Router>
);

export default App;

