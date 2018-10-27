import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import auth0Client from "../Auth";
import './Logout.css';


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

function Logout(props) {
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
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
             You've signed out.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={16} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=>auth0Client.signIn()}>
                    Sign in
                  </Button>
                </Grid>

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
          <img src={"./img/man-1"} className="rightImage" alt="right"  />
        </Grid> 

        {/* end right item ************************************* */}
      </Grid>
      {/* end container */}
    </React.Fragment>
  );
}

Logout.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Logout);
