import React, {Component} from "react";
import auth0Client from "../Auth";
import API from "../utils/API.js";
// import { isThisSecond } from "date-fns";
// import { isNull } from "util";

class UserProfile extends Component {
  state = {
    id: "",
    account: {},
    array: [],
    bench: "",
    squat: ""
  };

  componentWillMount() {
    if(auth0Client.isAuthenticated()){
      this.setState({id: auth0Client.getUserId()})
      // this.handleCheckUserExists(this.state.id);
    } else {
      auth0Client.signIn();
    }
    
    // if (this.state.array.length === 0) {
    //   this.handleCreateUser({
    //     id: auth0Client.getUserId(),
    //     name: auth0Client.getUserName(),
    //     email: auth0Client.getUserEmail()
    //   })
    //   this.handleUserExists(this.state.id);
    // } else {
    //   this.handleUserExists(this.state.id);
    // }
  };

  componentDidMount() {
    this.handleCheckUserExists(this.state.id)
  }

   

  round5 = (x) => {
    return (x % 5) >= 2.5 ? parseInt(x / 5) * 5 + 5 : parseInt(x / 5) * 5;
  }

  handleCheckUserExists = (id) => {
    API.getUserProfile(id)
    .then(res => this.setState({array: res.data}))
    .then(() =>{if (this.state.array.length === 0) {
      this.handleCreateUser({
        id: auth0Client.getUserId(),
        name: auth0Client.getUserName(),
        email: auth0Client.getUserEmail()
      })
      this.handleUserExists(this.state.id);
    } else {
      this.handleUserExists(this.state.id);
    }})
    .catch(err => console.log(err));
  };

  handleUserExists = id => {
    API.getUserProfile(id)
    // .then(res => console.log(res.data))
    .then(res =>{
    API.findOneRep(res.data[0].oneRepMax)
    .then(res => {
      this.setState({
        bench: res.data.bench,
        squat: res.data.squat
      })
    })
    .catch(err => console.log(err));
     this.setState({ account: res.data[0]})
    })
    .catch(err => console.log(err));
  };

  handleCreateUser = form => {
    API.createProfile(form)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }

  render() {
    const bench = this.round5(this.state.bench);
    const squat = this.round5(this.state.squat);
    const deadlift = this.round5(squat * 1.2);
    const name = this.state.account.name;
    // console.log("account one rep===", this.state.account.oneRepMax)
    return (
      <div>
        <h1>Hello, {name}!</h1>
        <h2>Your One Rep Max or Estimated One Rep Maxes:</h2>
            <p>
              Bench: {bench}
              <br/>
              Squat: {squat}
              <br/>
              Deadlift: {deadlift}
            </p>
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
