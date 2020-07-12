import React, { Component } from "react";

import * as routes from "../constants/routes";
import { Link } from "react-router-dom";

import withAuthorization from "./withAuthorization";
import { db } from "../firebase";

class Project5 extends Component {
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

          <div class="parallax parallax-top" style={{ backgroundImage: "linear-gradient(315deg, #63a4ff 0%, #83EAF1 74%)" }}></div>
          <div class="dark-over-pages"></div>

          <div class="hero-center-section">
            <div class="container z-bigger">
              <div class="row">
                <div class="col-12 section-title-wrap text-center parallax-fade-top-pages">
                  <p>Android Eclipse and UI Design</p>

                  <h2>Maxicare Locator 2.0</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section padding-top-bottom-big over-hide background-white">

          <div class="container">

            <div class="row justify-content-center">
              <div class="col-md-10 padding-bottom text-center lead" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">

                <p class="mb-4 pb-0 color-grayglass">

                  <img src="./images/project-5/maxicarelocator-locpin.gif" width="50px" /><br />
                  Maxicare Locator 2 helps you locate and contact accredited providers nationwide.

                The app features recomended route to provider location, enables you to download offline, add to favourites,
                and give physicians a direct call.
                </p>
                <a href="https://apkpure.com/maxicare-locator/com.project.maxicarelocator" target="_blank" class="btn btn-lg btn-success">
                  Download the app here <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>

                </a>

              </div>

              <div class="col-md-10 mb-4">
                <iframe width="100%" height="500" src="https://www.youtube.com/embed/7C-6KgoTyoE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>



              <div class="col-md-10 mb-4">
                <hr />
              </div>
              <div class="col-md-10 mb-4">
                <a href="./images/project-5/maxicarelocator-ui-screens.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-5/maxicarelocator-ui-screens.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>








            </div>
          </div>

          <div class="container padding-top-bottom-small">
            <div class="row">
              <div class="col-md-6 padding-top text-center">
              <Link to={routes.PROJECT4} className="cursor-link animsition-link color-black">
                  <div class="project-link-wrap">
                    <p class="color-lightgray"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> 02</p>
                    <h4 style={{ color: "#303030" }}>AstroLabs Final Projects <br /> Superhero Portal</h4>

                  </div>
                </Link>
              </div>
              <div class="col-md-6 padding-top text-center">
              <Link to={routes.PROJECT6} className="cursor-link animsition-link color-black">
                  <div class="project-link-wrap">
                    <p class="color-cornflowerblue">06 <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                    <h4 style={{ color: "#303030" }}>People <br />in Art</h4>
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

export default withAuthorization(authCondition)(Project5); //grants authorization to open endpoint if an user is signed in
