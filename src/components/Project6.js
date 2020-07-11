import React, { Component } from "react";

import * as routes from "../constants/routes";
import { Link } from "react-router-dom";

import withAuthorization from "./withAuthorization";
import { db } from "../firebase";

class Project6 extends Component {
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

<div class="parallax parallax-top" style={{ backgroundImage: "linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)" }}></div>
<div class="dark-over-pages"></div>

<div class="hero-center-section">
  <div class="container z-bigger">
    <div class="row">
      <div class="col-12 section-title-wrap text-center parallax-fade-top-pages">
        <p>Illustrations</p>

        <h2>People in Art</h2>
      </div>
    </div>
  </div>
</div>
</div>
        <div class="section padding-top-bottom-big over-hide background-white">

          <div class="container">

            <div class="row justify-content-center">
              <div class="col-md-10 padding-bottom" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
                <h2 class="color-black text-center">A hand-drawn portrait is worth a thousand words.</h2>
              </div>

              <div class="col-md-3 mb-4">
                <a href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9eb7e075063719.5c41fa04e21dc.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/9eb7e075063719.5c41fa04e21dc.jpg" class="cursor-more" alt="Abdeen" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-md-0 mb-4">
                <a href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c6942a75063719.5c41fa04e25c1.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/c6942a75063719.5c41fa04e25c1.jpg" class="cursor-more" alt="Ron and Kaye" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mb-4">
                <a href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/65461175063719.5c41fa04e283e.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/65461175063719.5c41fa04e283e.jpg" class="cursor-more" alt="Michael" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-md-0 mb-4">
                <a href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/5d80c275063719.5c41fa04e0de5.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/5d80c275063719.5c41fa04e0de5.jpg" class="cursor-more" alt="Marco" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mb-4">
                <a href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/725cfc75063719.5c41fa04e1bab.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/725cfc75063719.5c41fa04e1bab.jpg" class="cursor-more" alt="Romit" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-md-0 mb-4">
                <a href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d795a175063719.5c41fa04e1ea7.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d795a175063719.5c41fa04e1ea7.jpg" class="cursor-more" alt="Loida and Mark" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mb-4">
                <a href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/438be475063719.5c41fa04e1336.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/438be475063719.5c41fa04e1336.jpg" class="cursor-more" alt="Annie" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-md-0 mb-4">
                <a href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ca15b575063719.5c41fa04e1871.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/ca15b575063719.5c41fa04e1871.jpg" class="cursor-more" alt="Kris" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-md-0 mb-4">
                <a href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d186a775063719.5c41fa04e0972.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d186a775063719.5c41fa04e0972.jpg" class="cursor-more" alt="Jiji" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-md-0 mb-4">
                <a href="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b97c1a75063719.5c41fc1412856.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/b97c1a75063719.5c41fc1412856.jpg" class="cursor-more" alt="Team Receptionist" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-md-0 mb-4">
                <a href="./images/project-6/cheryl-and-friend.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-6/cheryl-and-friend.jpg" class="cursor-more" alt="Cheryl and friend" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-md-0 mb-4">
                <a href="./images/project-6/juanitamoeller.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-6/juanitamoeller.jpg" class="cursor-more" alt="Juanita" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-md-0 mb-4">
                <a href="./images/project-6/marco-avon2.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-6/marco-avon-thumbnail.jpg" class="cursor-more" alt="Marco and Avon" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-md-0 mb-4">
                <a href="./images/project-6/ron.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-6/ron-thumbnail.jpg" class="cursor-more" alt="Ron" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-md-0 mb-4">
                <a href="./images/project-6/alvin.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-6/alvin-thumbnail.jpg" class="cursor-more" alt="Alvin" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-md-0 mb-4">
                <a href="./images/project-6/andreas-rex.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-6/andreas-rex.jpg" class="cursor-more" alt="Andreas Rex" />
                  </div>
                </a>
              </div>

              <div class="col-md-6 padding-top text-center">
                <a href="/project-5" class="cursor-link animsition-link">
                  <div class="project-link-wrap">
                    <p class="color-lightgray"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> 05</p>
                    <h4 style={{color:"#303030"}}>Superhero Portal <br /></h4>
                  </div>
                </a>
              </div>
              <div class="col-md-6 padding-top text-center">
                <a href="/project-1" class="cursor-link animsition-link">
                  <div class="project-link-wrap">
                    <p class="color-cornflowerblue">01 <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                    <h4 style={{color:"#303030"}}>The Buzz <br />Staff Magazine</h4>
                  </div>
                </a>
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

export default withAuthorization(authCondition)(Project6); //grants authorization to open endpoint if an user is signed in
