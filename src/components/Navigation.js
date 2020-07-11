import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

import SignOutButton from "./SignOut";
import * as routes from "../constants/routes";

import AuthUserContext from "./AuthUserContext";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth userInfo={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);



const NavigationNonAuth = () => (


  <header class="cd-header">
    <div class="header-wrapper">
      <div class="logo-wrap">
        <Link to={routes.LANDING} className="font-weight-bolder text-decoration-none" id="linkAccount">kayesokua.com</Link>


      </div>
      <div class="nav-but-wrap">
        <div class="cursor-link animsition-link">
          <Link to={routes.SIGN_IN} className="font-weight-bolder text-decoration-none" id="linkAccount">View My Projects</Link>
         
         
        </div>
      </div>
    </div>
  </header>

  
);


export default Navigation;

const NavigationAuth = ({ userInfo }) => (

  <header class="cd-header">
    <div class="header-wrapper">
      <div class="logo-wrap">
      <Link to={routes.LANDING} className="font-weight-bolder text-decoration-none" id="linkAccount">kayesokua.com</Link>


      </div>
      <div class="nav-but-wrap">
        <div class="cursor-link animsition-link">
          <Link to={routes.HOME} className="font-weight-bolder text-decoration-none" id="linkProjects">My Projects</Link>
          {userInfo.providerData[0].providerId === "facebook.com" ? null : (

            <Link to={routes.ACCOUNT} className="font-weight-bolder text-decoration-none" id="linkAccount">Account</Link>

          )}
          <SignOutButton />
        </div>
      </div>
    </div>
  </header>





);

// const NavigationAuth = ({ userInfo }) => (
//   <ul>
//     {/* {console.log("NavigationAuth", userInfo)} */}
//     <li>
//       <Link to={routes.LANDING}>Landing</Link>
//     </li>
//     <li>
//       <Link to={routes.HOME}>Home</Link>
//     </li>
//     {/* disabling password changes/resets if user is logged in through facebook */}
//     {userInfo.providerData[0].providerId === "facebook.com" ? null : (
//       <li>
//         <Link to={routes.ACCOUNT}>Account</Link>
//       </li>
//     )}
//     <li>
//       <SignOutButton />
//     </li>
//   </ul>
// );

// const NavigationNonAuth = () => (
//   <ul>
//     <li>
//       <Link to={routes.LANDING}>Landing</Link>
//     </li>
//     <li>
//       <Link to={routes.SIGN_IN}>Sign In</Link>
//     </li>
//   </ul>
// );
