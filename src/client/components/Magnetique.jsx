import React, { Component } from 'react';
import styles from '../public/magnetique.sass';
import magLanding from '../public/img/magLanding.jpg';
import magLogo from '../public/img/magLogo.jpg';
import mag1 from '../public/img/magIphones.jpg';
import mag2 from '../public/img/magGirl.jpg';
import mag3 from '../public/img/mag3.jpg';
import { Link } from 'react-router-dom';




class Magnetique extends React.PureComponent {
	render() {
		return(
		<div className="mag">
			<div className="magLanding">
				<div className="magText">	
					<h4>Magnetique</h4>
					<h2>Capture it now</h2>
					<h3>Now, when you fall in love with 
					something on the fashion pages of InStyle 
					you can instantly find the stores that carry it 
					near you !</h3>
				</div>
				<img src={magLanding} />
			</div>
			<div className="infoBar4">
				<div className="magLogo">
					<img src={magLogo} />
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
			<div className="mag1">
				<img src={mag1} />
			</div>
			<div className="mag2">
				<img src={mag2} />
			</div>
			<div className="mag3">
				<img src={mag3} />
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

export default Magnetique;