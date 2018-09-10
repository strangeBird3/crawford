import React, { Component } from 'react';
import styles from '../public/magnetique.sass';
import magLanding from '../public/img/magLanding.jpg';
import magLogo from '../public/img/magLogo.jpg';
import mag1 from '../public/img/magIphones.jpg';
import mag2 from '../public/img/magGirl.jpg';
import mag3 from '../public/img/mag3.jpg';




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
					<h2>CONTACT ME</h2>
					<h3>Tell me about your next big idea!</h3>
					<i className="arrowButton zmdi zmdi-arrow-right"></i>
				</li>
				<li className="kindWords pure-u-md-1-2">
					<h2>KIND WORDS FROM</h2>
					<h2>PAST CLIENTS</h2>
					<i className="arrowButton zmdi zmdi-arrow-right"></i>
				</li>
			</div>
			<div className="socialFooter">
				<span>&copy; TODD DAVID CRAWFORD. ALL RIGHTS RESERVED.</span>
				<ul className="socialIcons">
					<i className="zmdi zmdi-facebook"></i>
					<i className="zmdi zmdi-linkedin"></i>
					<i className="zmdi zmdi-behance"></i>
				</ul>
			</div>
		</div>
	  
		);
	}
}

export default Magnetique;