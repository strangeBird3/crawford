import React, { Component } from 'react';
import styles from '../public/perfume.sass';
import perfumeLogo from '../public/img/perfumeLogo.jpg';
import perfumeDevices from '../public/img/perfumeDevices.jpg';
import perfumeYouth from '../public/img/perfumeYouth.jpg';
import perfumeImac from '../public/img/perfumeImac.jpg';
import babiesrusBox4 from '../public/img/babiesBox4.jpg';
import babiesrusDevices_mobile from '../public/img/babiesrusDevices_mobile.jpg';
import { Link } from 'react-router-dom';

class Perfume extends React.PureComponent {
	render() {
		return(
		<div className="perfume">
			<div className="perfumeLanding">
				<div className="perfumeText">	
					<h4>Estée Lauder</h4>
					<h2>New Product Launch</h2>
				</div>
			</div>
			<div className="infoBar2">
				<div className="perfumeLogo">
					<img src={perfumeLogo} />
				</div>
				<div className="boaList1">
					<h3>Role</h3>
					<h4>Lead Agency</h4>
					<h3>Assignment</h3>
					<h4>Social Media Campaign</h4>
					<h3>Channel</h3>
					<h4>Digital Education</h4>
				</div>
				<div className="hilfigerList2">
					<h3>Services</h3>
					<h4>Creative Direction</h4>
					<h4>Visual Design</h4>
					<h4>Technology</h4>
				</div>
			</div>
			<div className="vidText">
				<p>Created engagement on mobile and tablet devices. Developed 
				a multi-channel rich media campaign to allow consumers to shop 
				deals within the ads. Implemented a brand positioning strategy 
				for BabiesRUs on Facebook.</p>
			</div>
			<div className="perfumeDevices">
				<img src={perfumeDevices} />
			</div>
			<div className="perfumeYouth">
				<img src={perfumeYouth} />
			</div>
			<div className="perfumeImac">
				<img src={perfumeImac} />
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

export default Perfume;