import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Navbar from "../Navbar";
import "./VideoList.css";

const styles = theme => ({
  root: {
    width: "95%",
    marginTop: 40,
    marginLeft: 25,
    height: "110vh"
  },
  heading: {
    fontSize: 24,
    fontWeight: 300,
  },
  item: {
    fontSize: 20,
    fontWeight: 300,
  }
});

function VideoList(props) {
  const { classes } = props;
  return (
    <React.Fragment>
      <Navbar />
      <div className={classes.root}>
        <p className="vid_header">Exercise List</p>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            {/* ****************************** Legs ************************************ */}
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Legs</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className={classes.item}>
                  <ul>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=goblet%20squat"
                        target="_blank"
                      >
                        Goblet squat
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Back%20squat"
                        target="_blank"
                      >
                        Back squats
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Pistol%20squat"
                        target="_blank"
                      >
                        Pistol squats
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=k%20squat"
                        target="_blank"
                      >
                        K squats
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Reverse%20lunge"
                        target="_blank"
                      >
                        Reverse lunge
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Step%20ups"
                        target="_blank"
                      >
                        Step ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Calf%20raises"
                        target="_blank"
                      >
                        Calf raises
                      </a>
                    </li>
                  </ul>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            {/* ******************* Posterior Chain ************************************ */}
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>
                  Posterior Chain
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className={classes.item}>
                  <ul>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Reverse%20lunge"
                        target="_blank"
                      >
                        Reverse lunge
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Step%20ups"
                        target="_blank"
                      >
                        Step ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Dead%20lift"
                        target="_blank"
                      >
                        Dead lift
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Romanian%20dead%20lift"
                        target="_blank"
                      >
                        Romanian dead lift
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Single%20leg%20Romanian%20dead%20lift"
                        target="_blank"
                      >
                        Single leg Romanian dead lift
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Sumo%20dead%20lift"
                        target="_blank"
                      >
                        Sumo dead lift
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Snatchs"
                        target="_blank"
                      >
                        Snatchs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=clean%20weightlifting"
                        target="_blank"
                      >
                        Clean
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Facepulls"
                        target="_blank"
                      >
                        Facepulls
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Back%20Extension"
                        target="_blank"
                      >
                        Back Extension
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Straight%20arm%20pull%20down"
                        target="_blank"
                      >
                        Straight arm pull down
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=jerk%20weight%20lift"
                        target="_blank"
                      >
                        Jerk
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Calf%20raises"
                        target="_blank"
                      >
                        Calf raises
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Isometric%20YWT"
                        target="_blank"
                      >
                        Isometric YWTs
                      </a>
                    </li>
                  </ul>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            {/* **************************** Biceps ************************************ */}
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Biceps</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className={classes.item}>
                  <ul>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Overhand%20pull-ups"
                        target="_blank"
                      >
                        Overhand pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Underhand%20pull-ups"
                        target="_blank"
                      >
                        Underhand pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Neutral%20pull-ups"
                        target="_blank"
                      >
                        Neutral pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Switch%20pull-ups"
                        target="_blank"
                      >
                        Switch pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Curls%20lifting"
                        target="_blank"
                      >
                        Curls
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Isometric%20YWT"
                        target="_blank"
                      >
                        Isometric YWTs
                      </a>
                    </li>
                  </ul>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            {/* **************************** Triceps ************************************ */}
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Triceps</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className={classes.item}>
                  <ul>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Skull%20crushers"
                        target="_blank"
                      >
                        Skull crushers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Tricep%20extension"
                        target="_blank"
                      >
                        Tricep extension
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Tricep%20pushdowns"
                        target="_blank"
                      >
                        Tricep pushdowns
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Bench%20dips"
                        target="_blank"
                      >
                        Bench dips
                      </a>
                    </li>
                  </ul>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>

          <Grid item xs={6}>
            {/* **************************** Core ************************************ */}
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Core</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className={classes.item}>
                  <ul>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=V%20ups"
                        target="_blank"
                      >
                        V ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Plank%20exercise"
                        target="_blank"
                      >
                        Plank
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Vertical%20leg%20crunch"
                        target="_blank"
                      >
                        Vertical leg crunch
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Flutter%20kicks"
                        target="_blank"
                      >
                        Flutter kicks
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Bicycle%20Kicks%20exercise"
                        target="_blank"
                      >
                        Bicycle Kicks
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Reverse%20crunch"
                        target="_blank"
                      >
                        Reverse crunch
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Plank%20jumps"
                        target="_blank"
                      >
                        Plank jumps
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Bracing%20exercises"
                        target="_blank"
                      >
                        Bracing exercises
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Anti%20rotation%20exercises"
                        target="_blank"
                      >
                        Anti-rotation exercises
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Loaded%20carries"
                        target="_blank"
                      >
                        Loaded carries
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Hanging%20core%20exercises"
                        target="_blank"
                      >
                        Hanging exercises
                      </a>
                    </li>
                  </ul>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            {/* **************************** Shoulders ************************************ */}
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Shoulders</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className={classes.item}>
                  <ul>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Overhead%20press"
                        target="_blank"
                      >
                        Overhead press
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Lateral%20raise"
                        target="_blank"
                      >
                        Lateral raise
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Front%20raise"
                        target="_blank"
                      >
                        Front raise
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Reverse%20fly"
                        target="_blank"
                      >
                        Reverse fly
                      </a>
                    </li>
                  </ul>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            {/* **************************** Chest ************************************ */}
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Chest</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className={classes.item}>
                  <ul>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Bench%20press%20exercise"
                        target="_blank"
                      >
                        Bench press
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Incline%20bench%20press%20exercise"
                        target="_blank"
                      >
                        Incline bench press
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Decline%20bench%20press%20exercise"
                        target="_blank"
                      >
                        Decline bench press
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Cable%20crossovers"
                        target="_blank"
                      >
                        Cable crossovers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Flys%20exercise"
                        target="_blank"
                      >
                        Flys
                      </a>
                    </li>
                  </ul>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>

            {/* **************************** Back ************************************ */}
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>Back</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography className={classes.item}>
                  <ul>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Bentover%20row"
                        target="_blank"
                      >
                        Bentover row
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Onearm%20row"
                        target="_blank"
                      >
                        One arm row
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Inverted%20row"
                        target="_blank"
                      >
                        Inverted row
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Dead%20row%20exercise"
                        target="_blank"
                      >
                        Dead rows
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Seated%20rows"
                        target="_blank"
                      >
                        Seated rows
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=GDH%20row%20exercise"
                        target="_blank"
                      >
                        GDH rows
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Overhand%20pull-ups"
                        target="_blank"
                      >
                        Overhand pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Underhand%20pull-ups"
                        target="_blank"
                      >
                        Underhand pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Neutral%20pull-ups"
                        target="_blank"
                      >
                        Neutral pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Switch%20pull-ups"
                        target="_blank"
                      >
                        Switch pull-ups
                      </a>
                    </li>
                  </ul>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

VideoList.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(VideoList);
