import React, { Component } from "react";

import * as routes from "../constants/routes";
import { Link } from "react-router-dom";

import withAuthorization from "./withAuthorization";
import { db } from "../firebase";

class Project4 extends Component {
  state = {
    users: null,
    username: "",
    loading: true
  };

  componentDidMount() {
    db.onceGetUsers().then(res => {
      this.setState({
        users: res.val()
      });
    });

    const { loggedUser } = this.props;
    db.doGetAnUnser(loggedUser.uid).then(res => {
      this.setState({
        username: res.val().username,
        loading: false
      });
    });
  }

  render() {
    const { users, username, loading } = this.state;
    // console.log("dasdf", this.props.loggedUser);
    return (
      <React.Fragment>
        <div class="section big-55-height over-hide">

          <div class="parallax parallax-top" style={{ backgroundImage: "url('https://superhero-portal.herokuapp.com/static/media/2.65f83be6.jpg')" }}></div>
          <div class="dark-over-pages"></div>

          <div class="hero-center-section">
            <div class="container z-bigger">
              <div class="row">
                <div class="col-12 section-title-wrap text-center parallax-fade-top-pages">
                  <p>AstroLabs Final Project + MERN Stack App</p>
                  <h2>Superhero Portal</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section padding-top-bottom-big over-hide background-white">

          <div class="container">

            <div class="row justify-content-center">
              <div class="col-md-10 padding-bottom text-center lead" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
               
                <p class="mb-4 pb-0 color-grayglass ">Superhero Portal is a social networking site for superhero fans.
                The idea was presented upon the release of Avengers End Game (2019) - just for fun.
                 Images are taken from google.</p>
                <a href="http://superhero-portal.herokuapp.com/" target="_blank" class="btn btn-lg btn-success">
                  Visit the Web App  <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>

                </a>


              </div>

              

              <div class="col-md-10 mb-4">
              <p class="mb-4 pb-0 color-grayglass"> (Project to be continued)</p>
                <hr />
              </div>






            </div>
          </div>

          <div class="container padding-top-bottom-small">
            <div class="row">
              <div class="col-md-6 padding-top text-center">
              <Link to={routes.PROJECT3} className="cursor-link animsition-link color-black">
                  <div class="project-link-wrap">
                    <p class="color-lightgray"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> 03</p>
                    <h4 style={{color:"#303030"}}>CODE Challenge <br /> Volunteer365</h4>

                  </div>
                </Link>
              </div>
              <div class="col-md-6 padding-top text-center">
              <Link to={routes.PROJECT5} className="cursor-link animsition-link color-black">
                  <div class="project-link-wrap">
                    <p class="color-cornflowerblue">05 <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                    <h4 style={{color:"#303030"}}>Maxicare <br />Locator App</h4>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>



      </React.Fragment >

    );
  }
}

const UserList = ({ users }) => (
  <div>
    {console.log("users", users)}
    <h2>List of Usernames of Users</h2>
    <p>(Saved on Sign Up in Firebase Database)</p>

    {Object.keys(users).map(key => (
      <div key={key}>{users[key].username}</div>
    ))}
  </div>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(Project4); //grants authorization to open endpoint if an user is signed in
