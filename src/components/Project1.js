import React, { Component } from "react";

import * as routes from "../constants/routes";
import { Link } from "react-router-dom";

import withAuthorization from "./withAuthorization";
import { db } from "../firebase";

class Project1 extends Component {
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

          <div class="parallax parallax-top" style={{ backgroundImage: "url('https://ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/online-comms/stage-spotlight.jpg.transform/1920w/image.jpg')" }}></div>
          <div class="dark-over-pages"></div>

          <div class="hero-center-section">
            <div class="container z-bigger">
              <div class="row">
                <div class="col-12 section-title-wrap text-center parallax-fade-top-pages">
                  <p>Biannual Staff Magazine</p>
                  <h2>The Buzz by Messe Frankfurt Dubai</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section padding-top-bottom-big over-hide background-white">

          <div class="container">

            <div class="row justify-content-center">


              <div class="col-md-10 padding-bottom-small lead" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
                <p class="mb-4 color-grayglass">The Buzz is Messe Frankfurt Dubai's expression of culture.
                Our people just love to read about people. The biannual staff magazine is a passion project run by the Online
                Communications Executive, supported by the PR department. It is our platform to recognise employees,
               celebrate their accomplishments, and everything fun under the UAE sun 🌞</p>
              </div>
              <div class="col-md-10 padding-bottom-small">
                <hr />
              </div>


              <div class="col-md-5 mb-4">


                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="./images/project-1/thebuzz2020-lockdown.mp4" allowfullscreen ></iframe>
                </div>

              </div>

              <div class="col-md-5 text-left color-grayglass">
                <h5 class="mb-3 color-grayglass">The Lockdown Edition</h5>
                <p class="mb-4 pb-0">
                  The Buzz Lockdown edition highlights how our colleagues are handling working from home,
                  new developments both personal and professional, and how to get the most out of Ramadan this year.

                  <a href="https://login.mailingwork.de/-ea-show/19356/13/gSLlwfPx3B/html" target="_blanl"> Read newsletter release here.</a>
                  <br />
                </p>
                <a href="https://ae.messefrankfurt.com/dubai/buzz-lockdown.html" target="_blank" class="btn btn-danger">
                  Visit The Buzz Lockdown Edition 2020  <i class="fa fa-external-link" aria-hidden="true"></i>

                </a>
              </div>

              <div class="col-md-10 mb-4">
                <hr />
              </div>
              <div class="col-md-5 mb-4">
                <a href="https://login.mailingwork.de/public/a_19356_Z7Ntw/file/data/57_winter-buzz-header.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://login.mailingwork.de/public/a_19356_Z7Ntw/file/data/57_winter-buzz-header.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>

              <div class="col-md-5 text-left color-grayglass">
                <h5 class="mb-3 color-grayglass">From Print to Digital</h5>
                <p class="mb-4 pb-0">
                  As the company gear towards a paperless workplace, the Buzz team decided to leave 'print' behind and from today onwards, start
                  considering rich media content. It allows us to archive and work more efficiently! 
                  <a href="https://login.mailingwork.de/-ea-show/19356/1/DbTD4pdX5X/html" target="_blanl"> Read newsletter release here.</a>
                  <br />
                </p>
                <a href="https://ae.messefrankfurt.com/dubai/buzz.html" target="_blank" class="btn btn-danger">
                  Visit The Buzz Winter Edition 2019  <i class="fa fa-external-link" aria-hidden="true"></i>

                </a>
              </div>

              <div class="col-md-10 mb-4">
                <hr />
              </div>
              <div class="col-md-5 mb-4">
                <a href="./images/project-1/thebuzz2019-summer.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-1/thebuzz2019-summer.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>

              <div class="col-md-5 text-left color-grayglass">
                <h5 class="mb-3 color-grayglass">Tracking Digital Footprints</h5>
                <p class="mb-4 pb-0">
                  The Buzz team was so keen on improving after the design revamp, so we decided to use our trusted e-mailing software,
                  Mailingworks for its digital distribution, along with the printed copies in the reception area. The team is able to
                  extra more readership data and behavior. <a href="https://login.mailingwork.de/-ea-show/19356/3/NKlGbq9zb0/html" target="_blank"> Read newsletter release here.</a>
                 </p>
                <a href="https://ae.messefrankfurt.com/dubai/buzz-lockdown.html" target="_blank" class="btn btn-danger">
                  Read The Buzz Winter Summer 2019  <i class="fa fa-book" aria-hidden="true"></i>

                </a>
              </div>

              <div class="col-md-10 mb-4">
                <hr />
              </div>
              <div class="col-md-5 mb-4">
                <a href="./images/project-1/thebuzz2018-winter.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-1/thebuzz2018-winter.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>

              <div class="col-md-5 text-left color-grayglass">
                <h5 class="mb-3 color-grayglass">Design Revamp</h5>
                <p class="mb-4 pb-0">
                 Good covers get readers to pick up a magazine, so the Buzz team made sure to nail its visuals this Winter edition, after
                 almost being discontinued. Since joining the team, I have introduced the wonders of Adobe InDesign and made a mission to deliver
                 quality news with quality visuals.</p>
                <a href="https://issuu.com/messefrankfurtme/docs/20181212thebuzz" target="_blank" class="btn btn-danger">
                  Read The Buzz Winter Edition 2018  <i class="fa fa-book" aria-hidden="true"></i>

                </a>

              </div>
              <div class="col-md-10 mb-4">
                <hr />
              </div>



            </div>
          </div>


          <div class="container padding-top-bottom-small">
            <div class="row">
              <div class="col-md-6 padding-top text-center">
              <Link to={routes.PROJECT6} className="cursor-link animsition-link color-black">
                  <div class="project-link-wrap">
                    <p class="color-lightgray"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> 06</p>
                    <h4 style={{color:"#303030"}}>People <br /> in Art</h4>

                  </div>
                </Link>
              </div>
              <div class="col-md-6 padding-top text-center">
              <Link to={routes.PROJECT2} className="cursor-link animsition-link color-black">
                  <div class="project-link-wrap">
                    <p class="color-cornflowerblue">02 <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                    <h4 style={{color:"#303030"}}>Online Exhibition <br />Marketing</h4>
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

export default withAuthorization(authCondition)(Project1); //grants authorization to open endpoint if an user is signed in
