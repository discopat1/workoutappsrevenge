import React, {Component} from "react";
import auth0Client from "../Auth";
import API from "../utils/API.js";

class UserProfile extends Component {
  state = {
    account: true,
  };

  handleUserExists = (id) => {
    if (API.getUserProfile(id)) {
      API.createProfile({
        name: auth0Client.getUserName(),
        id: auth0Client.getUserId(),
        email: auth0Client.getUserEmail()
      }).then(API.getUserProfile(id))
    }
  };

  render() {
    return (
      <div>
      {API.getUserProfile(auth0Client.getUserId()).length === 0 ?(
        <h1>FALSE!!</h1>
      ):(<h1>TRUE!!</h1>)}
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
