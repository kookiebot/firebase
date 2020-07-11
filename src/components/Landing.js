import React from "react";
import { Link } from "react-router-dom";
import * as routes from "../constants/routes";

import './MainStyle.css';


const LandingPage = () => (
	<React.Fragment>

		<div class="section padding-page-top mb-4 over-hide">
			<div class="container">
				<div class="row">
					<div class="col-12 section-title-wrap text-center parallax-fade-top">

						<h1 class="color-black mb-4">Kaye So Kua</h1>
						<p class="color-black">Engineering new opportunities, the digital way. 👩‍💻</p>
					</div>
				</div>
			</div>
		</div>

		<div class="section padding-bottom over-hide">
			<div class="container">
				<div class="row justify-content-center">
					<div class="col-md-8 text-center">
						<p class="mb-0 pb-0 color-black">
							The last seven years of my career has been filled with unprecedented
							relocations and growth. I am lucky to find work and call these cities my home:
							Manila, Singapore, Taipei, Dubai (and Berlin soon!). I have accumulated work
							experiences in UI design, B2c Retail Sales, Administration, and Online
							Event Marketing. The variety of roles I held allowed to become versatile and discover
							the parallels in between.
							<br /><br />
							As an incoming Software Engineering student, I am focused on learning Python,
							Data Structures, and Algorithms. The decision to shift career from Multimedia Design
							was not easy, but at the end of the day, life is what you make it. I aspire to find a profession
							that is closer to my core values and aspirations.
							<br /><br />
							Technology is a great equalizer and I've love to contribute to its future success and accessibility.
							I mean, who else would I rather be?							
						</p>
					</div>
						<div class="section clearfix"></div>
						<div class="col-md-12 padding-top-bottom">
							<div class="img-wrap">
								<img src="./me2.jpg" alt="Kaye and sunflowers" />
							</div>
						</div>
						<div class="col-md-7 text-center" data-scroll-reveal="enter bottom move 30px over 0.5s after 0.2s">
							<p class="mb-0 pb-0 lead-q"><em>"When I make plans, I think big. When I make progress, I think small."</em></p>
							<h6 class="mt-5">James Clear</h6>
						</div>
					</div>
				</div>
			</div>

  </React.Fragment>


);

export default LandingPage;
