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
                        
                      >
                        Goblet squat
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Back%20squat"
                        
                      >
                        Back squats
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Pistol%20squat"
                        
                      >
                        Pistol squats
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=k%20squat"
                        
                      >
                        K squats
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Reverse%20lunge"
                        
                      >
                        Reverse lunge
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Step%20ups"
                        
                      >
                        Step ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Calf%20raises"
                        
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
                        
                      >
                        Reverse lunge
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Step%20ups"
                        
                      >
                        Step ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Dead%20lift"
                        
                      >
                        Dead lift
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Romanian%20dead%20lift"
                        
                      >
                        Romanian dead lift
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Single%20leg%20Romanian%20dead%20lift"
                        
                      >
                        Single leg Romanian dead lift
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Sumo%20dead%20lift"
                        
                      >
                        Sumo dead lift
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Snatchs"
                        
                      >
                        Snatchs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=clean%20weightlifting"
                        
                      >
                        Clean
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Facepulls"
                        
                      >
                        Facepulls
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Back%20Extension"
                        
                      >
                        Back Extension
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Straight%20arm%20pull%20down"
                        
                      >
                        Straight arm pull down
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=jerk%20weight%20lift"
                        
                      >
                        Jerk
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Calf%20raises"
                        
                      >
                        Calf raises
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Isometric%20YWT"
                        
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
                        
                      >
                        Overhand pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Underhand%20pull-ups"
                        
                      >
                        Underhand pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Neutral%20pull-ups"
                        
                      >
                        Neutral pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Switch%20pull-ups"
                        
                      >
                        Switch pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Curls%20lifting"
                        
                      >
                        Curls
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Isometric%20YWT"
                        
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
                        
                      >
                        Skull crushers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Tricep%20extension"
                        
                      >
                        Tricep extension
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Tricep%20pushdowns"
                        
                      >
                        Tricep pushdowns
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Bench%20dips"
                        
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
                        
                      >
                        V ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Plank%20exercise"
                        
                      >
                        Plank
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Vertical%20leg%20crunch"
                        
                      >
                        Vertical leg crunch
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Flutter%20kicks"
                        
                      >
                        Flutter kicks
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Bicycle%20Kicks%20exercise"
                        
                      >
                        Bicycle Kicks
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Reverse%20crunch"
                        
                      >
                        Reverse crunch
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Plank%20jumps"
                        
                      >
                        Plank jumps
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Bracing%20exercises"
                        
                      >
                        Bracing exercises
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Anti%20rotation%20exercises"
                        
                      >
                        Anti-rotation exercises
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Loaded%20carries"
                        
                      >
                        Loaded carries
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Hanging%20core%20exercises"
                        
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
                        
                      >
                        Overhead press
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Lateral%20raise"
                        
                      >
                        Lateral raise
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Front%20raise"
                        
                      >
                        Front raise
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Reverse%20fly"
                        
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
                        
                      >
                        Bench press
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Incline%20bench%20press%20exercise"
                        
                      >
                        Incline bench press
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Decline%20bench%20press%20exercise"
                        
                      >
                        Decline bench press
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Cable%20crossovers"
                        
                      >
                        Cable crossovers
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Flys%20exercise"
                        
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
                        
                      >
                        Bentover row
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Onearm%20row"
                        
                      >
                        One arm row
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Inverted%20row"
                        
                      >
                        Inverted row
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Dead%20row%20exercise"
                        
                      >
                        Dead rows
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Seated%20rows"
                        
                      >
                        Seated rows
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=GDH%20row%20exercise"
                        
                      >
                        GDH rows
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Overhand%20pull-ups"
                        
                      >
                        Overhand pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Underhand%20pull-ups"
                        
                      >
                        Underhand pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Neutral%20pull-ups"
                        
                      >
                        Neutral pull-ups
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.youtube.com/results?search_query=Switch%20pull-ups"
                        
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
