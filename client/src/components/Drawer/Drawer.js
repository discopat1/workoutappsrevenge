import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const styles = {
  list: {
    width: 250,
    marginLeft: 25,
    marginTop: 25
  },
  fullList: {
    width: "auto"
  }
};

class TemporaryDrawer extends React.Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { classes } = this.props;

    const sideList = (
      <div className={classes.list}>
        {/* **** dashboard ***** */}
        <List>
          <Link
            to="/dashboard"
            className={
              window.location.pathname === "/dashboard"
                ? "nav-link active"
                : "nav-link"
            }
            style={{ textDecoration: "none", color: "inherit" }}
          >
            DASHBOARD
          </Link>
        </List>
        <Divider />

        {/* **** self assessment ***** */}
        <List>
          <Link
            to="/selfassess"
            className={
              window.location.pathname === "/selfassess"
                ? "nav-link active"
                : "nav-link"
            }
            style={{ textDecoration: "none", color: "inherit" }}
          >
            SELF ASSESSMENT
          </Link>
        </List>

        {/* **** workout now ***** */}
        <List>
          <Link
            to="/wodoptions"
            className={
              window.location.pathname === "/wodoptions"
                ? "nav-link active"
                : "nav-link"
            }
            style={{ textDecoration: "none", color: "inherit" }}
          >
            WORKOUT NOW
          </Link>
        </List>

        {/* **** exercise list ***** */}
        <List>
          <Link
            to="/exerciselist"
            className={
              window.location.pathname === "/exerciselist"
                ? "nav-link active"
                : "nav-link"
            }
            style={{ textDecoration: "none", color: "inherit" }}
          >
            EXERCISE LIST
          </Link>
        </List>


        {/* **** workout of the day ***** */}
        {/* <List>
          <Link
            to="/wodactive"
            className={
              window.location.pathname === "/wodactive"
                ? "nav-link active"
                : "nav-link"
            }
            style={{ textDecoration: "none", color: "inherit" }}
          >
            WORKOUT OF THE DAY
          </Link>
        </List> */}



        <Divider />


        {/* **** logout ***** */}
        <List>
          <Link
            to="/Logout"
            className={
              window.location.pathname === "/Logout"
                ? "nav-link active"
                : "nav-link"
            }
            style={{ textDecoration: "none", color: "inherit" }}
          >
          LOGOUT
          </Link>
        </List>


      </div>
    );

    return (
      <div>
        <IconButton
          className={classes.menuButton}
          onClick={this.toggleDrawer("left", true)}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer("left", false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer("left", false)}
            onKeyDown={this.toggleDrawer("left", false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TemporaryDrawer);
