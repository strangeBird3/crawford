import React, { Component } from 'react';
import styles from '../public/perfume.sass';
import perfumeLogo from '../public/img/perfumeLogo.jpg';
import perfumeDevices from '../public/img/perfumeDevices.jpg';
import perfumeYouth from '../public/img/perfumeYouth.jpg';
import perfumeImac from '../public/img/perfumeImac.jpg';
import babiesrusBox4 from '../public/img/babiesBox4.jpg';
import babiesrusDevices_mobile from '../public/img/babiesrusDevices_mobile.jpg';

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

export default Perfume;