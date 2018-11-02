import React from "react";
import SAForm from "../SelfAssessForm";
import ORForm from "../OneRepForm";
import Navbar from "../Navbar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./OneRepAssessPage.css";

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

function Assessment(props) {
  const { classes } = props;
  return (
    <React.Fragment>
    <Navbar />
  <div className={classes.root}>
    <div className="ora_container">
      {/* start header  */}
      <div >
        <p className="ora_header">Assessment Page</p>
        {/* end header */}
      </div>
      <Grid container spacing={24}>
          <Grid item xs={4} className={classes.leftBox}>
            <SAForm />
          </Grid>

        <Grid item xs={8} className={classes.rightBox}>
            <ORForm />
        </Grid>
      </Grid>
        {/* end article */}
    </div>
  </div>
  </React.Fragment>
  );

};
  
Assessment.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Assessment);
