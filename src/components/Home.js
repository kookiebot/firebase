import React, { Component } from "react";

import * as routes from "../constants/routes";
import { Link } from "react-router-dom";

import withAuthorization from "./withAuthorization";
import { db } from "../firebase";


import { mouseProject1, mouseProject2, mouseProject3, mouseProject4, mouseProject5, mouseProject6 } from './ProjectItems';

class HomePage extends Component {
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

			<div class="section full-height over-hide background-whiteglass-2">

				<div class="case-study-name-title">projects fave</div>
				<ul class="case-study-wrapper">

					<li class="case-study-name" id="caseStudy1" onMouseOver={mouseProject1} >
						<span >The Buzz</span>
						<Link to={routes.PROJECT1} className="cursor-link animsition-link">explore</Link>
					</li>
					<li class="case-study-name" id="caseStudy2" onMouseOver={mouseProject2}>
						<span>Intersec</span>
						<Link to={routes.PROJECT2} className="cursor-link animsition-link">explore</Link>
					</li>
					<li class="case-study-name" id="caseStudy3" onMouseOver={mouseProject3}>
						<span>Volunteer365</span>
						<Link to={routes.PROJECT3} className="cursor-link animsition-link">explore</Link>
					</li>
					<li class="case-study-name" id="caseStudy4" onMouseOver={mouseProject4}>
						<span>Superhero Portal</span>
						<Link to={routes.PROJECT1} className="cursor-link animsition-link">explore</Link>
					</li>
					<li class="case-study-name" id="caseStudy5" onMouseOver={mouseProject5}>
						<span>Maxicare Locator</span>
						<Link to={routes.PROJECT5} className="cursor-link animsition-link">explore</Link>
					</li>
					<li class="case-study-name" id="caseStudy6" onMouseOver={mouseProject6}>
						<span>People in Art</span>
						<Link to={routes.PROJECT6} className="cursor-link animsition-link">explore</Link>
					</li>
				</ul>
				<ul class="case-study-images">
					<li id="caseStudyDesc1" class="show">
						<div class="img-hero-background" style={{ backgroundImage: "url('https://ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/online-comms/stage-spotlight.jpg.transform/1920w/image.jpg')" }}></div>


						<div class="dark-over-hero"></div>
						<div class="hero-number-back">01</div>
						<div class="hero-number">01</div>
						<div class="hero-number-fixed">06</div>
						<div class="case-study-title">Digital Magazine, Journalism</div>
					</li>
					<li id="caseStudyDesc2" class="hide">
						<div class="img-hero-background" style={{ backgroundImage: "url('https://intersec.ae.messefrankfurt.com/content/dam/messefrankfurt-dubai/Intersec/brand/isme-kv.jpg.transform/1920w/image.jpg')" }}></div>
						<div class="hero-number-back">02</div>
						<div class="hero-number">02</div>
						<div class="hero-number-fixed">06</div>
						<div class="case-study-title">Exhibition Marketing, Digital Banners</div>
					</li>
					<li id="caseStudyDesc3" class="hide">
						<div class="img-hero-background" style={{ background: "url('https://ivang-design.com/alke/img/1.jpg')" }}></div>
						<div class="hero-number-back">03</div>
						<div class="hero-number">03</div>
						<div class="hero-number-fixed">06</div>
						<div class="case-study-title">User Interface Design, Ionic Framework</div>
					</li>
					<li id="caseStudyDesc4" class="hide">
						<div class="img-hero-background" style={{ background: "url('https://ivang-design.com/alke/img/2.jpg')" }}></div>
						<div class="hero-number-back">04</div>
						<div class="hero-number">04</div>
						<div class="hero-number-fixed">06</div>
						<div class="case-study-title">MERN Stack Development</div>
					</li>
					<li id="caseStudyDesc5" class="hide">
						<div class="img-hero-background" style={{ background: "url('https://ivang-design.com/alke/img/3.jpg')" }}></div>
						<div class="hero-number-back">05</div>
						<div class="hero-number">05</div>
						<div class="hero-number-fixed">06</div>
						<div class="case-study-title">Android Eclipse, User Interface Design</div>
					</li>
					<li id="caseStudyDesc6" class="hide">
						<div class="img-hero-background" style={{ background: "url('https://ivang-design.com/alke/img/4.jpg')" }}></div>
						<div class="hero-number-back">06</div>
						<div class="hero-number">06</div>
						<div class="hero-number-fixed">06</div>
						<div class="case-study-title">Illustrations</div>
					</li>
				</ul>
			</div>
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

export default withAuthorization(authCondition)(HomePage); //grants authorization to open endpoint if an user is signed in
