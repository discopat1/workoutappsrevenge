import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import './SplashPage.css';
import auth0Client from "../Auth";


const styles = theme => ({
  heroContent: {
    maxWidth: "85%",
    margin: "0 auto",
    padding: `${theme.spacing.unit * 0}px 0 ${theme.spacing.unit * 6}px`
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    },
    card: {
      maxWidth: "100%",
    },
    media: {
      height: "100%"
    },
  }
});

function Splash(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid container>
        {/* left item ************************************* */}
        <Grid item xs={6}>
          <div className={classes.heroUnit}>
          <img src={"./img/logo.png"} className="App-logo" alt="logo"  />
          <div className={classes.heroContent}>

            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              The WorkOut App
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              The app for the aspiring fitness <br /> buff or serious athlete.
            </Typography>

            <Typography
              variant="h7"
              align="center"
              color="textSecondary"
              paragraph
            >
              Built for those who want to exercise with purpose while also living a time constrained lifestyle. Just answer a few questions and you'll be provided an customized workout based on your specific needs.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary"

                  onClick={()=>auth0Client.signIn()}>
                    Sign in
                  </Button>
                </Grid>
                {/* <Grid item>
                  <Button variant="outlined" color="primary">
                    More Information
                  </Button>
                </Grid> */}
              </Grid>
            </div>
          </div>{" "}
          {/* end heroContent */}
          </div> 
          {/* end heroUnit */}
        </Grid>
        {/* end left item ************************************* */}



        {/* right item start ************************************* */}

        <Grid item xs={6}>
          <img src={"./img/workout-package_1.jpg"} className="rightImage" alt="right"  />

        </Grid> 

        {/* end right item ************************************* */}
      </Grid>
      {/* end container */}
    </React.Fragment>
  );
}

Splash.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Splash);
