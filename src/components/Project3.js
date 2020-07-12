import React, { Component } from "react";

import * as routes from "../constants/routes";
import { Link } from "react-router-dom";

import withAuthorization from "./withAuthorization";
import { db } from "../firebase";

class Project3 extends Component {
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

          <div class="parallax parallax-top background-blue"></div>
          <div class="dark-over-pages"></div>

          <div class="hero-center-section">
            <div class="container z-bigger">
              <div class="row">
                <div class="col-12 section-title-wrap text-center parallax-fade-top-pages">
                  <p>CODE Challenge using Ionic Framework</p>
                  <h2>Volunteer365</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section padding-top-bottom-big over-hide background-white">

          <div class="container">

            <div class="row justify-content-center">
              <div class="col-md-10 text-left" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">

              <p class="mb-4 pb-0 text-left">
              <img src="./images/project-3/volunteer365-logo-rounded.png" width="75px"/>
              </p>
                <p class="mb-4 pb-0 color-grayglass lead">
                  
                  <span style={{fontWeight:"700"}}>Volunteer365</span> is designed for the production team of Every Nation/Victory Churches worldwide. The production team includes both full-time staff and volunteers.
               
               </p>
               <p class="mb-4 pb-0 color-grayglass ">
                 Problem: Keeping volunteers engaged and properly distributing opportunities
               </p>
                  <p class="mb-4 pb-0 color-grayglass ">
                <strong>Primary Objectives</strong>
                  <ul><li>To ease processes and impose effective scheduling of roster</li>
                    <li>To effectively communicate volunteer-related matters, announcements, etc.</li>
                    <li>To increase engagement between production teams</li></ul>

                  <strong>Secondary Objectives</strong>
                  <ul><li>To keep track of overall volunteering experience</li>
                    <li>To engage volunteers to continue despite relocating to a new country</li></ul>

                  <a href="./images/project-3/volunteer365-test.apk" target="_blank" class="btn btn-success">
                    Download Android APK  <i class="fa fa-download" aria-hidden="true"></i>

                  </a></p>

              </div>
              <div class="col-md-10 mb-4">
              <hr />
              </div>
              <div class="col-md-10 mb-4">
              <p class="mb-4 pb-0 color-grayglass">
              Each Every Nation Production Team (Sunday Crew) has its own organizational structure and preferences,
              but the most common types of ministries are:
              Administrative Support, Online Communications / Social Media, Kids, Intercessory, Worship Team - Music Team,
              Performing Arts - Dance and Theatre, Tech and Stage management, Ushering and Security Team, and Full Time Staff / Seniors.
              (<a href="./images/project-3/volunteer365-user-research.pdf" target="_blank">More basic information listed this document)</a>. For this particular UI study, it focuses on the potential users from the music team. 
               </p>

               
              <p class="mb-4 pb-0 color-grayglass">
              I conducted an informal interview from members of the worship/music team about main features that could possibly
              enhance their volunteer experience. I have concluded to these features: Lineup and band management (a more efficnet way
              of scheduling practice or letting members know of one's availability), song bank (a list of approved
              songs), recording sessions which is essential to the nature of the ministry.
               </p>
               <p class="mb-4 pb-0 color-grayglass">
              (Research to be continued)
               </p>
                <a href="./images/project-3/volunteer365-ui1.gif" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-3/volunteer365-ui1.gif" class="cursor-more" alt="Volunteer365 UI Screen 1 - Lineup" />
                  </div>
                </a>
              </div>


              <div class="col-md-10 mb-4">
                <hr />
              </div>
              <div class="col-md-10 mb-4">
                <a href="./images/project-3/volunteer365-ui2.gif" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-3/volunteer365-ui2.gif" class="cursor-more" alt="Volunteer365 UI Screen 1 - Songbank and Messenger" />
                  </div>
                </a>
              </div>


              <div class="col-md-10 mb-4">
                <hr />
              </div>
              <div class="col-md-10 mb-4">
                <a href="./images/project-3/volunteer365-ui3.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-3/volunteer365-ui3.jpg" class="cursor-more" alt="Volunteer365 UI Screen 3 - Practice Session" />
                  </div>
                </a>
              </div>
              <div class="col-md-10 mb-4">
                <hr />
              </div>
              <div class="col-md-10 mb-4">
                <a href="./images/project-3/volunteer365-ui3.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-3/volunteer365-ui4.jpg" class="cursor-more" alt="Volunteer365 UI Screen 3 - Practice Session" />
                  </div>
                </a>
              </div>
              <div class="col-md-6 padding-top text-center">
              <Link to={routes.PROJECT2} className="cursor-link animsition-link color-black">
                  <div class="project-link-wrap">
                    <p class="color-lightgray"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> 02</p>
                    <h4 style={{color:"#303030"}}>Online Exhibition <br /> Marketing</h4>

                  </div>
                </Link>
              </div>
              <div class="col-md-6 padding-top text-center">
              <Link to={routes.PROJECT4} className="cursor-link animsition-link color-black">
                  <div class="project-link-wrap">
                    <p class="color-cornflowerblue">04 <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                    <h4 style={{color:"#303030"}}>Superhero Portal</h4>
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

export default withAuthorization(authCondition)(Project3); //grants authorization to open endpoint if an user is signed in
