import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../public/vital.sass';
import vitalLanding from '../public/img/vitalLanding.jpg';
import vitalLogo from '../public/img/vitalLogo.jpg';
import vital1 from '../public/img/vital1.jpg';
import vital2 from '../public/img/vital2.jpg';
import vital3 from '../public/img/vital3.jpg';
import vital4 from '../public/img/vital4.jpg';



class Vital extends React.PureComponent {
	render() {
		return(
		<div className="vital">
			<div className="vitalLanding">
				<div className="vitalText">	
					<h4>VITALRESPONSE</h4>
					<h2>CONTINGENCY PLANNING, REPLACEMENT & CRISIS STAFFING</h2>
					<h3>When threatened with a labor action, Vital Response can provide 
					your healthcare facility with the industry leading expertise required 
					to continue to provide high quality patient care that your community 
					deserves</h3>
				</div>
				<img src={vitalLanding} />
			</div>
			<div className="infoBar4">
				<div className="magLogo">
					<img src={vitalLogo} />
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
				<div className="accentureText1">
					<p>A premier fashion brand, Magnetique needed to help 
					re-present themselves to their dedicated audience as an 
					inspirational and authentic brand.  My team collaboratively 
					working on Create innovative interactive designs for a high-profile 
					client, Magnetique for the ecommerce iPhone app that is in partnership 
					with Instyle magazine.
					</p>
				</div>
			</div>
			<div className="vital1 pure-u-md-1-2">
				<img src={vital1} />
			</div>
			<div className="vital2 pure-u-md-1-2">
				<img src={vital2} />
			</div>
			<div className="vital3 pure-u-md-1-2">
				<img src={vital3} />
			</div>
			<div className="vital4 pure-u-md-1-2">
				<img src={vital4} />
			</div>
			
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

export default Vital;