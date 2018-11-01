import React, { Component } from "react";
import "./WorkoutInputForm.css";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
});

const exercises = JSON.parse(localStorage.getItem("exercises"));


// console.log("exercise name", this.exerciseName)

// save each exercise to state by adding to an array - that will be a submit for each exercise and add to an array of exercises for that day
// then there will a save workout button that posts that array of exercises to the workout history database
// so the state array will be saved in the wod active page and sent out from there

class WODForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      sets: '',
      reps: '',
      weight: []
    }
    this.handleFormSubmit =this.handleFormSubmit.bind(this);
  }
  
  
   handleInputChange = event => {
    
    let value = event.target.value;
    const name = event.target.name;
    
    // Updating the input's state
      this.setState({
        [name]: value
      });
  };

  

   handleFormSubmit = event => {
    event.preventDefault();
    console.log("passed state", this.state);
    this.props.addExercise(this.state)
  };

   render() {
    const { classes } = this.props;
    return (
      <div>
        <form className="form">
          <TextField
          id="exercise-name"
          select
          name="name"
          label="Name"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleInputChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Select your exercise"
          margin="normal"
        >
        {exercises.map(option => (
            <MenuItem key={option.name} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>
          <br/>
          <TextField
          id="sets"
          name="sets"
          label="Sets"
          value={this.state.sets}
          onChange={this.handleInputChange}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
          <br/>
          <TextField
          id="reps"
          name="reps"
          label="Reps"
          value={this.state.reps}
          onChange={this.handleInputChange}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
        />
          <br/>
          <TextField
          id="weight"
          name="weight"
          label="Weight"
          type="number"
          className={classes.textField}
          value={this.state.weight}
          onChange={this.handleInputChange}
          margin="normal"
        />
          <br/>
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

WODForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

 export default withStyles(styles)(WODForm); 