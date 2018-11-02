import auth0 from 'auth0-js';
// import history from '../history/history';

// ...
class Auth {
  constructor() {
    this.auth0 = new auth0.WebAuth({
      // the following three lines MUST be updated
      domain: 'workoutapp.auth0.com',
      audience: 'https://workoutapp.auth0.com/userinfo',
      clientID: 'fkSbNMsnAOUII0epY5hnBddf3druZMDb',
      redirectUri: 'http://localhost:3000/callback',
      responseType: 'token id_token',
      scope: 'openid profile'
    });

    this.getProfile = this.getProfile.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  getProfile() {
    return this.profile;
  }

  getIdToken() {
    return this.idToken;
  }

  getUserName() {
    return this.profile.nickname;
  }

  getUserId() {
    let id = this.profile.sub;
    return id.substring(6);
  }

  getUserEmail() {
    return this.profile.name;
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        this.idToken = authResult.idToken;
        this.profile = authResult.idTokenPayload;
        // set the time that the id token will expire at
        this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
        resolve();
      });
    })
  }

  isAuthenticated() {
    return new Date().getTime() < this.expiresAt;
  }

  signIn() {
    this.auth0.authorize();
  }

  signOut() {
    // clear id token, profile, and expiration
    this.idToken = null;
    this.profile = null;
    this.expiresAt = null;
    this.auth0.logout({returnTo: 'https://workoutappsrevenge.herokuapp.com/Logout', clientID:'fkSbNMsnAOUII0epY5hnBddf3druZMDb'});
    
  }
}

const auth0Client = new Auth()

export default auth0Client;