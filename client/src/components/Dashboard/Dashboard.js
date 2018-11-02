import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import UserProfile from "../ProfileCard";
import Navbar from "../Navbar";
import "./Dashboard.css";
import Table from "../Table";

const styles = theme => ({
  root: {
    width: "95%",
    marginTop: 40,
    marginLeft: 25,
    height: "100vh"
  },
  leftBox: {
    backgroundColor:"gray",
    height:"100vh",
  },
  rightBox: {
    backgroundColor:"lightgray",
    height:"100vh",
  },
});

function Dash(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.root}>
        <p className="vid_header">Dashboard</p>
        <Grid container spacing={24}>
          <Grid item xs={4} className={classes.leftBox}>
            <UserProfile />
          </Grid>

          <Grid item xs={8} className={classes.rightBox}>
<<<<<<< HEAD
            <Table />
=======
          <UserProfile />
>>>>>>> 5eaf0400f82d43b4b5839ef729874a34606178f6
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

Dash.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dash);
