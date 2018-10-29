import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import auth0Client from "../Auth";
import "./Logout.css";


function Logout() {

  return (
    <React.Fragment>
      <CssBaseline />
      <div className="container">
        {/* left column ************************************* */}
        <div className="leftcol">
          <div className="article">
            <img src={"./img/logo.png"} className="App-logo" alt="logo" />
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              The WorkOut App
            </Typography>

            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              You've signed out.
            </Typography>

            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() => auth0Client.signIn()}
              >
                Sign in
              </Button>
            </Grid>
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
