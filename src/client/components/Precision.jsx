import React, { Component } from 'react';
import styles from '../public/precision.sass';
import precisionLogo from '../public/img/precisionLogo.jpg';
import precisionGirl from '../public/img/precisionGirl.jpg';
import precisionIpad1 from '../public/img/precisionIpad1.jpg';
import precisionIpad2 from '../public/img/precisionIpad2.jpg';
import precisionLanding from '../public/img/precisionLanding.jpg';
import { Link } from 'react-router-dom';

class Precision extends React.PureComponent {
	render() {
		return(
		<div className="precision">
			<div className="precisionLanding">
				<img src={precisionLanding} />
			</div>
			<div className="infoBar4">
				<div className="precisionLogo">
					<img src={precisionLogo} />
				</div>
				<div className="boaList1">
					<h3>Role</h3>
					<h4>Lead Agency</h4>
					<h3>Assignment</h3>
					<h4>UI / Visual Design Services</h4>
					<h3>Channel</h3>
					<h4>Pharam</h4>
				</div>
				<div className="precisionList2">
					<h3>Services</h3>
					<h4>Brand Direction</h4>
					<h4>Creative Direction</h4>
					<h4>Visual Design</h4>
				</div>
			</div>
			<div className="eastdilText">
				<p><span>Ask:</span> Execute new concepts and strategies.  Develop and implement unique, 
				creative and innovative concepts and design strategies for analytic applications healthcare 
				executives in agile environment. In my role as UX / UI Designer at Precision of Value 
				I led design research, design strategy, interaction design and visual design for a clinician- 
				and patient-facing product that encourages collaboration around health tracking and planing of 
				launching FDA approved drugs . My process involved clinician and patient interviews, distillation 
				of foundational research into user personas and a high-level strategy, collaboration on branding 
				and ‘look and feel,’ heavy sketching, wireframing and prototyping, visual design, and collaboration 
				with developers on the little details that matter. I enjoyed working closely with this small yet 
				mighty organization.</p>
			</div>
			<div className="invisionApp">
				<iframe width="972" height="720" src="//invis.io/8RNWLID63UT" frameborder="0" allowfullscreen></iframe>
			</div>
			<div className="precisionIpad1">
				<div className="precIpad1 pure-u-md-1-2"><img src={precisionIpad1} /></div>
				<div className="precIpad1txt pure-u-md-1-2">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim leo eu tellus 
					tincidunt malesuada. Aenean lectus libero, luctus ut dapibus vel, porta a turpis. Nulla id felis 
					lacinia, ultrices nibh </p>
				</div>
			</div>
			<div className="precisionIpad2">
				<div className="precIpad2txt pure-u-md-1-2">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim leo eu tellus 
					tincidunt malesuada. Aenean lectus libero, luctus ut dapibus vel, porta a turpis. Nulla id felis 
					lacinia, ultrices nibh </p>
				</div>
				<div className="precIpad2 pure-u-md-1-2"><img src={precisionIpad2} /></div>
			</div>
			<div className="precisionGirl"><img src={precisionGirl} /></div>
			<div className="contactReviews">
				<li className="contactMe pure-u-md-1-2">
					<Link  to="/contact" className=""><h2>CONTACT ME</h2></Link>
					<Link  to="/contact" className=""><h3>Tell me about your next big idea!</h3></Link>
					<Link  to="/contact" className=""><i class="arrowButton zmdi zmdi-arrow-right"></i></Link>
				</li>
				<li className="kindWords pure-u-md-1-2">
					<Link  to="/testimonials" className=""><h2>KIND WORDS FROM</h2></Link>
					<Link  to="/testimonials" className=""><h2>PAST CLIENTS</h2></Link>
					<Link  to="/testimonials" className=""><i class="arrowButton zmdi zmdi-arrow-right"></i></Link>
				</li>
			</div>
			<div className="socialFooter">
				<span>&copy; TODD DAVID CRAWFORD. ALL RIGHTS RESERVED.</span>
				<ul className="socialIcons">
					<a  href="https://www.facebook.com/TdcGraphicDesign/" className=""><i class="zmdi zmdi-facebook"></i></a>
					<a  href="https://www.linkedin.com/in/todd-crawford-a706814/" className=""><i class="zmdi zmdi-linkedin"></i></a>
					<a  href="https://www.behance.net/ToddCrawford" className=""><i class="zmdi zmdi-behance"></i></a>
				</ul>
			</div>
		</div>
	  
		);
	}
}

export default Precision;