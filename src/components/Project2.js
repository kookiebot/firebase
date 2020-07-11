import React, { Component } from "react";

import * as routes from "../constants/routes";
import { Link } from "react-router-dom";

import withAuthorization from "./withAuthorization";
import { db } from "../firebase";

class Project2 extends Component {
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

          <div class="parallax parallax-top" style={{ backgroundImage: "url('https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/brand/isme-short-banner.jpg.transform/1920w/image.jpg')" }}></div>
          <div class="dark-over-pages"></div>

          <div class="hero-center-section">
            <div class="container z-bigger">
              <div class="row">
                <div class="col-12 section-title-wrap text-center parallax-fade-top-pages">
                  <p>Online Exhibition Marketing</p>
                  <h2>Intersec, Intersec Saudi Arabia, Intersec Awards</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="section padding-top-bottom-big over-hide background-white">

          <div class="container">

            <div class="row justify-content-center">
              <div class="col-md-10 padding-bottom text-left" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
                <blockquote class="blockquote mb-5">
                  <p>

                    Intersec is the largest international exhibition for Security, Safety and Fire Protection is where innovators, end-users and government agencies come together to collaborate, share knowledge and prepare for future challenges.
        </p>
                </blockquote>

                <p class="mb-4 pb-0 color-grayglass">The 22nd edition gathered 1,084 exhibitors from 56 countries across 7 product sections:  Commercial Security, Smart Home,
                Information Security, Fire and Rescue, Safety and Health, Homeland Security and Policing, and Perimeter and Physical Security.
    The exhibition attracted 33,872 visitors from 136 countries.</p>
                <p class="mb-0 pb-4 color-grayglass">
                  As the Online Communications Executive for Intersec (2018-2020), I was mostly responsible with
                  e-mail campaigns (Mailingworks), landing pages (HTML/CSS/Basic Javascript), website management, and other digital
                  collateral such as Google Banners, PPC ads, social media post (Facebook/LinkedIn/Instagram). We work
    alongside marketing, sponsorship, and show managers.</p>

                <a href="https://intersec.ae.messefrankfurt.com/dubai/en.html" target="_blank" class="btn btn-success">
                  Visit the official website <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>

                </a>

              </div>

              <div class="col-md-5 mb-4">
                <a href="./images/project-2/isme-visprom-sample.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-2/isme-visprom-sample.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>
              <div class="col-md-5 mt-md-0 mb-4">
                <a href="./images/project-2/isme-exprom-sample.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-2/isme-exprom-sample.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>
              <div class="col-md-10 text-left color-grayglass">
                <h5 class="mb-3 color-grayglass">Email Segmentation</h5>
                <p class="mb-4 pb-0">
                  Intersec e-mail marketing focuses on promoting relevant content to 3 major groups: visitors, exhibitors, VIPs. Estimated overall database grew from 62,000 to 85,000. Our newsletter focuses on providing quality and lengthy content for our highly educated audience.
    </p>
                <h6 class="color-black mb-4">Visitor Promotion</h6>
                <p class="mb-4 pb-0">
                  Visitor promotion focuses on registration conversions from new and repeat trade buyers, and increasing website
                  traffic. Newsletter content is dynamic and personalized. It generally features content from exhibitors,
                  planning and preparation details, and some sponsored content.
      See full content examples here: <a
                    href="https://login.mailingwork.de/-ea-show/8362/391/BMF5T1zqf3/html" target="_blank">Introducing the Intersec
ARENA </a>| <a href="https://login.mailingwork.de/-ea-show/8362/423/ZcR71ML8pk/html" target="_blank">Let us help
plan your trip</a> | <a href="https://login.mailingwork.de/-ea-show/8362/429/nQXlGvxTR7/html"
                    target="_blank">AI, Big Data, Cloud, Machine Learning</a> | <a
                      href="https://login.mailingwork.de/-ea-show/8362/413/L33cmJjBkq/html" target="_blank">Conferences – Disruptive
Technologies, regulatory requirements, innovations</a> </p>

                <h6 class="color-black mb-4">Exhibitor Promotion</h6>
                <p class="mb-4 pb-0">
                  Exhibitor promotion focuses on satisfying our exisiting clients with value-added services.
      The campaigns are more direct and less visual, usually in a form of a text mailer. </p>
                <p class="mb-4 pb-0">
                  Intersec Awards is a gala event that gathers industry professionals in the Security, Safety, and Fire
                  Protection to celebrate their achievements in the industry. It is a sub-event before the exhibition. Last
edition took place was held at Dubai’s Habtoor Palace Ballroom and saw more than 250 guests attend. <a
                    href="https://intersec.ae.messefrankfurt.com/dubai/en/press/stories/2020/20190912.html" target="_blank">See
press release about the event here.</a></p>

                <h6 class="color-black mb-4">VIP PROMOTION</h6>
                <p class="mb-4 pb-0">VIP Promotion focuses on engaging directly with our team’s
                handpicked subscribers from the database. This audience category often includes key decision makers of the company
                such as the CEO’s, COO’s, and Managing Directors, known personalities in the industry, and public sector employees.
Marketing for the VIP category is mostly dynamic and involves more than e-mail marketing.</p>
              </div>
              <div class="col-md-10 mb-4">
                <a href="./images/project-2/isme-vip-sample.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-2/isme-vip-sample.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>
              <div class="col-md-10 mb-4">
                <hr />
              </div>
              <div class="col-md-5 mb-4">
                <a href="./images/project-2/isme-email-reports.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-2/isme-email-reports.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>
              <div class="col-md-5 text-left color-grayglass">
                <h5 class="mb-3 color-grayglass">Email Performance Analysis</h5>
                <p class="mb-4 pb-0">

                  The key objective in our individual and overall email performance analysis is to identify the most engaging content via unique opens, unique clicks, website visit as tracked via Google Analytics, and registration conversion obtained through our in-house CRM team.
         </p>
                <p>
                  Our OCE team relies on the software’s automated reports after every email dispatch and gathers all e-mail statistics for post-show campaign analysis. The report includes last year’s statistics, Top 3 Opens, Top 3 Subject Lines, Top 3 CTOR’s, Device Used, Country, and open timings — In Intersec’s case, the most opens were from 10AM to 2PM (GMT+4). We use Google Analytics for website traffic and refer to UTM codes for the conversions.While it is impossible to track or interpret everything, the team makes effort to analyze conversion trends and conclude to on a few actionable insights.
         </p>
              </div>
              <div class="col-md-10 mb-4">
                <hr />
              </div>
              <div class="col-md-5 mb-4">
                <a href="./images/project-2/thumbnail-printed-invite.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-2/thumbnail-printed-invite.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>
              <div class="col-md-5 padding-bottom text-left color-grayglass">
                <h5 class="mb-3 color-grayglass">Exhibitor Services</h5>

                <h6 class="color-black mb-4">Marketing Toolbox</h6>

                <p class="mb-4 pb-0">

                  A set of online marketing tools to maximize an exhibitor’s online presence which includes the following collateral: web banners, personalized and non-personalized e-cards, request for printed invitations, logos, social media presence

</p>
                <a href="https://intersec.ae.messefrankfurt.com/dubai/en/exhibitor-services/marketing-sponsorship/toolbox.html" target="_blank" class="btn btn-success">
                  View live page here &nbsp;<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="container-fluid background-grey-1">

            <div class="row">
              <div class="col-md-4 mt-4 mb-4">
                <a href="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/thumbnail-nonpersonalised-en.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/thumbnail-nonpersonalised-en.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>
              <div class="col-md-4 mt-4 mb-4">
                <a href="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/thumbnail-nonpersonalised-ar.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/thumbnail-nonpersonalised-ar.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>
              <div class="col-md-4 mt-4 mb-4">
                <a href="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/thumbnail-ignitionpack.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/thumbnail-ignitionpack.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>



              <div class="col-md-3 mt-2 mb-4">
                <a href="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/intersec2020-160x600.gif" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/thumbnail-120x600.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-2 mb-4">
                <a href="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/intersec2020-728x90.gif" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/thumbnail-728x90.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-2 mb-4">
                <a href="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/intersec-2020-468x60.gif" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/thumbnail-468x60.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>
              <div class="col-md-3 mt-2 mb-4">
                <a href="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/intersec-2020-234x60.gif" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/2019-2020/marketing-toolbox/thumbnail-234x60.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>

            </div>
          </div>

          <div class="container padding-top-bottom-big">
            <div class="row">
              <div class="col-md-5 mb-4">
                <a href="./images/project-2/isme-landingpages.gif" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-2/isme-landingpages.gif" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>
              <div class="col-md-5 text-left color-grayglass">
                <h5 class="mb-3 color-grayglass">Landing Pages</h5>
                <p class="mb-4 pb-0">
                  Landing pages are standalone web pages that focuses on lead generation and quick accommodation to specific
                  component requests. For Intersec, we traditionally have gated forms for booking forms, sales and conference
                  brochures, conference registrations, awards nomination, VIP nomation, etc.</p>
              </div>
              <div class="col-md-10 mb-4">
                <hr />
              </div>
              <div class="col-md-4 text-left" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s" data-scroll-reveal-id="3" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
                <a href="./images/project-2/isme-bookingform.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-2/isme-bookingform.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
                <p class="mt-4 pb-0">A lead-generating form that is automatically added to our e-marketing database. It is also Google-tracked which allows us to study the user journey and time spent on the page.</p>

                <a href="https://login.mailingwork.de/-lp/49fSP8362/6SRwh49/index.html" target="_blank" class="btn btn-info">visit the page here &nbsp;<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>

              </div>
              <div class="col-md-4 text-left" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s" data-scroll-reveal-id="3" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
                <a href="./images/project-2/isme-media-reg.jpg" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-2/isme-media-reg.jpg" class="cursor-more" alt="" />
                  </div>
                </a>
                <p class="mt-4 pb-0">
                  Media representatives who preregister may receive their badges before the show. Leads are directly sent to the Head of PR while automatically added to our PR database.

</p>
                <a href="https://login.mailingwork.de/-lp/49fSP8362/Wjvtc45/index.html" target="_blank" class="btn btn-info">View live page here &nbsp;<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>

              </div>
              <div class="col-md-4 text-left" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s" data-scroll-reveal-id="3" data-scroll-reveal-initialized="true" data-scroll-reveal-complete="true">
                <a href="./images/project-2/isme-video-demos.gif" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-2/isme-video-demos.gif" class="cursor-more" alt="" />
                  </div>
                </a>
                <p class="mt-4 pb-0">As we are receiving more and more request to include their product demonstrations, I was able to accommodate the request by having a small video gallery.</p>
                <a href="https://login.mailingwork.de/-lp/49fSP8362/yh0bq253/index.html" target="_blank" class="btn btn-info">visit the page here &nbsp;<i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>

              </div>
            </div>
          </div>


        </div>

        <div class="section big-55-height pb-0">

          <div class="parallax parallax-top" style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/5e7e4d22dc34fb6814c7e8bb/1589064120026-B5HRGH826H3A55STZRNB/issa2020-kv.jpg?format=1000w&content-type=image%2Fjpeg')" }}></div>
          <div class="dark-over-pages"></div>

          <div class="hero-center-section">
            <div class="container z-bigger">
              <div class="row">
                <div class="col-12 section-title-wrap text-center parallax-fade-top-pages">
                  <p>Bilingual Content Marketing</p>
                  <h2>Intersec Saudi Arabia</h2>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section padding-top-bottom-big over-hide background-white">

          <div class="container">

            <div class="row justify-content-center">
              <div class="col-md-10 text-left" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
                <blockquote class="blockquote mb-5">
                  <p>

                    The high number of trade visitors from Saudi Arabia to the event in Dubai and the huge demand for safety and security equipment/ services in the Kingdom led Messe Frankfurt Exhibition GmbH together with Al Harithy Company for Exhibitions Ltd. (ACE) decided to launch Intersec Saudi Arabia in Jeddah.

</p>
                </blockquote>
              </div>
              <div class="col-md-5 mb-4">
                <a href="./images/project-2/isme-landingpages.gif" class="cursor-link" data-fancybox="gallery">
                  <div class="img-wrap">
                    <img src="./images/project-2/isme-landingpages.gif" class="cursor-more" alt="" />
                  </div>
                </a>
              </div>
              <div class="col-md-5 text-left color-grayglass">
                <h5 class="mb-3 color-grayglass">Bilingual Content Marketing</h5>
                <p class="mb-4 pb-0">
                  The key difference in online marketing for Intersec Saudi Arabia is crafting campaigns that caters to English and Arabic-speaking audience.
                  Design has to be rendered from right to left.
                  </p>
    
<a href="https://www.intersec-ksa.com" target="_blank" class="btn btn-info"> Visit the official website <i class="fa fa-arrow-circle-o-right" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div class="container-fluid padding-top-bottom-small">
            <div class="row">
              <div class="col-md-6 padding-top text-center">
                <a href="/project-1" class="cursor-link animsition-link">
                  <div class="project-link-wrap">
                    <p class="color-lightgray"><i class="fa fa-long-arrow-left" aria-hidden="true"></i> 01</p>
                    <h4 style={{color:"#303030"}}>The Buzz <br /> Staff Magazine</h4>

                  </div>
                </a>
              </div>
              <div class="col-md-6 padding-top text-center">
                <a href="/project-3" class="cursor-link animsition-link">
                  <div class="project-link-wrap">
                    <p class="color-cornflowerblue">03 <i class="fa fa-long-arrow-right" aria-hidden="true"></i></p>
                    <h4 style={{color:"#303030"}}>CODE Challenge <br /> Volunteer365</h4>
                  </div>
                </a>
              </div>

            </div>
          </div>
        </div>
      </React.Fragment>

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

export default withAuthorization(authCondition)(Project2); //grants authorization to open endpoint if an user is signed in
