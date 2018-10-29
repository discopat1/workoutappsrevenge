import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import auth0Client from "../Auth";
import "./Logout.css";

function Logout() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="log_container">
        {/* left column ************************************* */}
        <div className="log_leftcol">
          <div className="log_article">
            <div>
              <img src={"./img/logo.png"} className="log_logo" alt="logo" />
            </div>

            <div>
              <p className="log_headline">The WorkOut App</p>
              <p className="log_subhead">You've signed out.</p>
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
          <img src={"./img/man01.jpg"} className="rightImage" alt="right" />
        </div>

        {/* end container */}
      </div>
    </React.Fragment>
  );
}

export default Logout;
