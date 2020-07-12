import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import 'react-image-lightbox/style.css';
import { firebase } from "../firebase";
import * as routes from "../constants/routes";

//top navigation
import Navigation from "./Navigation";
import LandingPage from "./Landing";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import HomePage from "./Home";
import AccountPage from "./Account";

import withAuthentication from "./withAuthentication";

//case studies
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
import Project5 from "./Project5";
import Project6 from "./Project6";

const App = () => (
  <BrowserRouter>
    <div className="section over-hide">
      <Navigation />
      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route exact path={routes.ACCOUNT} component={AccountPage} />
      <Route exact path={routes.PROJECT1} component={Project1} />
      <Route exact path={routes.PROJECT2} component={Project2} />
      <Route exact path={routes.PROJECT3} component={Project3} />
      <Route exact path={routes.PROJECT4} component={Project4} />
      <Route exact path={routes.PROJECT5} component={Project5} />
      <Route exact path={routes.PROJECT6} component={Project6} />
      
    </div>
    
  </BrowserRouter>

  


);

// class App extends Component {
//   //holds info about if an user is signed in or not
//   state = {
//     authUser: null
//   };

//   componentDidMount() {
//     //a listener for the authenticated user
//     //if the user signs out, the authUser becomes null
//     firebase.auth.onAuthStateChanged(authUser => {
//       authUser
//         ? this.setState({ authUser })
//         : this.setState({ authUser: null });
//     });
//   }

//   render() {
//     return (
//       // <div className="App">
//       <BrowserRouter>
//         <div>
//           <Navigation authUser={this.state.authUser} />

//           <hr />

//           <Route exact path={routes.LANDING} component={LandingPage} />
//           <Route exact path={routes.SIGN_UP} component={SignUpPage} />
//           <Route exact path={routes.SIGN_IN} component={SignInPage} />
//           <Route
//             exact
//             path={routes.PASSWORD_FORGET}
//             component={PasswordForgetPage}
//           />
//           <Route exact path={routes.HOME} component={HomePage} />
//           <Route exact path={routes.ACCOUNT} component={AccountPage} />
//         </div>
//       </BrowserRouter>
//       // </div>
//     );
//   }
// }

// export default App;
export default withAuthentication(App); //using HoC to handle session
