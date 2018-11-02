import React, { Component } from "react";
import "./SelfAssessForm.css";
import API from "../utils/API";
import auth0Client from "../Auth";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
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

class SAForm extends Component {
    state = {
      bench: "",
      squat: "",
      weight: "",
      id: auth0Client.getUserId()
    };
    
  handleInputChange = event => {

    let value = event.target.value;
    const cleanNumber = parseInt(value)
    const name = event.target.name;
    // Updating the input's state
    if (Number.isInteger(cleanNumber) || value.length === 0) {
      // Updating the input's state
        this.setState({
          [name]: value
        });
      } 
    };

  handleFormSubmit = id => {
    if (this.state.bench && this.state.squat && this.state.weight) {
          API.estimateOneRep(id,
          {
            bench: parseInt(this.state.bench),
            squat: parseInt(this.state.squat),
            weight: parseInt(this.state.weight)
          })
          .catch(err => console.log(err));
            
        } else {
          alert("Fill out your max reps please!");
        }
    
  };

  render() {
    const id = this.state.id;
    const { classes } = this.props;
    console.log("SA's user id", id);
    // Notice how each input has a `value`, `name`, and `onChange` prop
    // const id = auth0.getUserId();
    return (      
      <div>
        <p>
          If you don't know your one rep max please test how many pushups you can do at once and how many squats you can do at once
        </p>
        <form className="form" onSubmit={this.handleFormSubmit}>
        <TextField
            id="bench"
            label="Max Pushups"
            value={this.state.bench}
            name="bench"
            onChange={this.handleInputChange}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            placeholder="Max pushups!"
          />
          <br/>
          <TextField
            id="squat"
            label="Max Squats"
            value={this.state.squat}
            name="squat"
            onChange={this.handleInputChange}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            placeholder="Max squats!"
          />
          <br/>
          <TextField
            id="bodyweight"
            label="Bodyweight"
            value={this.state.weight}
            name="weight"
            onChange={this.handleInputChange}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            placeholder="Your body weight!"
          />
          <br/>
          <button onClick={() =>{this.handleFormSubmit(id)}}><Link to="/dashboard">Submit</Link></button>
        </form>
      </div>
    );
  }
}

SAForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SAForm);