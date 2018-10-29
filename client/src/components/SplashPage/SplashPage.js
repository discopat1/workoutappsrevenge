import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import auth0Client from "../Auth";
import './SplashPage.css';

function Splash() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="spl_container">
        {/* left column ************************************* */}
        <div className="spl_leftcol">
          <div className="spl_article">
            <div>
              <img src={"./img/logo.png"} className="spl_logo" alt="logo" />
            </div>

            <div>
              <p className="spl_headline">The WorkOut App</p>
              <p className="spl_subhead">The app for the aspiring fitness buff or serious athlete.</p>
              <p className="spl_blurb">Built for those who want to exercise with purpose while also living a time constrained lifestyle. Just answer a few questions and you'll be provided an customized workout based on your specific needs.</p>
            </div>

            <div className="button">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => auth0Client.signIn()}
                >
                  Sign in
                </Button>
              </Grid>
            </div>

            {/* end article */}
          </div>
          {/* end left column */}
        </div>

        {/* right column ************************************* */}
        <div className="rightcol">
          <img src={"./img/woman01.jpg"} className="rightImage" alt="right" />
        </div>

        {/* end container */}
      </div>
    </React.Fragment>
  );
}

export default Splash;
