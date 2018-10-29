import React, {Component} from "react";
import auth0Client from "../Auth";
import API from "../utils/API.js";
import { isThisSecond } from "date-fns";
import { isNull } from "util";

class UserProfile extends Component {
  state = {
    id: auth0Client.getUserId(),
    account: {},
    array: []
  };

  componentDidMount() {
    this.handleCheckUserExists(this.state.id);
    if (this.state.array.length === 0) {
      this.handleCreateUser({
        id: auth0Client.getUserId(),
        name: auth0Client.getUserName(),
        email: auth0Client.getUserEmail()
      })
      this.handleUserExists(this.state.id);
    } else {
      this.handleUserExists(this.state.id);
    }
  };

  handleCheckUserExists = id => {
    API.getUserProfile(id)
    .then(res => this.setState({array: res.data}))
    .catch(err => console.log(err));
  };

  handleUserExists = id => {
    API.getUserProfile(id)
    // .then(res => console.log(res.data))
    .then(res => this.setState({ account: res.data[0]} ))
    .catch(err => console.log(err));
  };

  handleCreateUser = form => {
    API.createProfile(form)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }

  render() {
    const name = this.state.account.name;
    return (
      <div>
        <h1>Hello, {name}!</h1>
      </div>
    )
  }
}

// const UserProfile = () => (
//   <div>
//   <h3>Hello, {auth0Client.getUserName()}!</h3>
//   <h3>Your ID is {auth0Client.getUserId()}</h3>
//   <h3>Your email is {auth0Client.getUserEmail()}</h3>
//   </div>
// );

export default UserProfile;
