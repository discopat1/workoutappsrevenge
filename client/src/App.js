import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// custom components we created
import Splash from "./components/SplashPage";
import Dash from "./components/Dashboard";
import SAForm from "./components/SelfAssessForm";
import WODoptions from "./components/WODactive";
import WODactive from "./components/WODactive";

const App = () => (
  <Router>
    <React.Fragment>
        <div>
          <Route exact path="/" component={Splash} />
          <Route exact path="/dashboard" component={Dash} />
          <Route exact path="/selfassess" component={SAForm} />
          <Route exact path="/wodoptions" component={WODoptions} />
          <Route exact path="/wodactive" component={WODactive} />
        </div>
    </React.Fragment>
  </Router>
);

export default App;

