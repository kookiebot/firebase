import React from "react";

import AuthUserContext from "./AuthUserContext";
import { PasswordForgetForm } from "./PasswordForget";
import PasswordChangeForm from "./PasswordChange";
import withAuthorization from "./withAuthorization"; //redirects to sign in if user not signed in

const AccountPage = () => (
  //authUser is passed down via Context API (It is set at withAuthentication.js file)
  <AuthUserContext.Consumer>
    {authUser => (
      <div className="section padding-page-top padding-bottom over-hide background-whiteglass">
        <div class="container">
          <div class="row">
            <div class="col-12 section-title-wrap text-center parallax-fade-top color-grayglass">
              <p>Change/Reset Password for : <span class="color-cornflowerblue"> {authUser.email} </span></p>
              <h1 class="color-grayglass">My Account</h1>
              <p class="mt-4"><small>This form sends a reset link to your email.</small></p>
            </div>
          </div>



          {/* disabling password changes/resets if user is logged in through facebook */}
          {authUser.providerData[0].providerId === "facebook.com" ? null : (
            <div class="row justify-content-center">
              
              <PasswordForgetForm />
              <PasswordChangeForm />
            </div>
          )}
        </div>
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser =>
  !!authUser && authUser.providerData[0].providerId !== "facebook.com"; //true and false

export default withAuthorization(authCondition)(AccountPage);
