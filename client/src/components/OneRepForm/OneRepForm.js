import React, { Component } from "react";
import "./OneRepForm.css";
import API from "../utils/API";
import auth0Client from "../Auth";
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from "react-router-dom";
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

class ORForm extends Component {
  state = {
      bench: "",
      squat: "",
      id: ""
    };
    
    componentDidMount() {
      if(auth0Client.isAuthenticated()){
        this.setState({id:auth0Client.getUserId()});
      }
    }
  
   handleInputChange = event => {
    
    let value = event.target.value;
    const cleanNumber = parseInt(value)
    const name = event.target.name;
    if (Number.isInteger(cleanNumber) || value.length === 0) {
    // Updating the input's state
      this.setState({
        [name]: value
      });
    } 
  };
   handleFormSubmit = (id, e) => {
     e.preventDefault();
    if (this.state.bench && this.state.squat) {
      API.actualOneRep(id,
      {
        bench: parseInt(this.state.bench),
        squat: parseInt(this.state.squat),
      })
      .then(()=> {
        window.location.href="./dashboard"
      })
      .catch(err => console.log(err));
    } else {
      alert("Fill out your one rep max please!");
    }
  };

   render() {
     console.log("ORstate", this.state)
    //  const id = "5bd5e745e3128c3b7c65e888"
    const { classes } = this.props;
     const id = this.state.id;
     console.log("OR user id", id);
    return (
      <div>
        <p>
          If you know your one rep maxes please enter them here
        </p>
        <br/>
        <br/>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <TextField
            id="bench"
            label="Bench Press One Rep Max"
            value={this.state.bench}
            name="bench"
            onChange={this.handleInputChange}
            type="number"
            className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
            placeholder="Bench 1RM!"
          />
          <br/>
          <TextField
            id="squat"
            label="Squat One Rep Max"
            value={this.state.squat}
            name="squat"
            onChange={this.handleInputChange}
            type="number"
            className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          margin="normal"
            placeholder="Squat 1RM!"
          />
          <br/>
          <Link to="/dashboard"><button onClick={(e) =>{this.handleFormSubmit(id, e)}}>
          Submit
          </button></Link>
        </form>
      </div>
    );
  }
}

ORForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

 export default withStyles(styles)(ORForm); 