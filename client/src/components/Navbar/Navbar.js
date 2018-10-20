import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TemporaryDrawer from '../Drawer';
import { Link } from "react-router-dom";
import API from "../utils/API";



const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        <TemporaryDrawer /> 
          <Typography variant="h6" color="inherit" className={classes.grow}>
          <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link" : "nav-link"
        }
        style={{ textDecoration: 'none', color: 'inherit' }}>
        WORKOUT APP
      </Link>
          </Typography>
          <Button color="inherit"
          onClick={API.logIn}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);