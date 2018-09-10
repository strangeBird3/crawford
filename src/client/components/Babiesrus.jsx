import React, { Component } from 'react';
import styles from '../public/babiesrus.sass';
import babiesrusLogo from '../public/img/babiesrusLogo.jpg';
import babiesrusBox1 from '../public/img/babiesBox1.jpg';
import babiesrusBox2 from '../public/img/babiesBox2.jpg';
import babiesrusBox3 from '../public/img/babiesBox3.jpg';
import babiesrusBox4 from '../public/img/babiesBox4.jpg';
import babiesrusDevices_mobile from '../public/img/babiesrusDevices_mobile.jpg';
import babiesrusDevices from '../public/img/babiesrusDevices.jpg';

class Babiesrus extends React.PureComponent {
	render() {
		return(
		<div className="babiesrus">
			<div className="babiesrusLanding">
				<div className="babiesrusText">	
					<h4>Babies "R" US</h4>
					<h2>I'm a Toys "R" Kid</h2>
				</div>
			</div>
			<div className="infoBar">
				<div className="boaLogo">
					<img src={babiesrusLogo} />
				</div>
				<div className="boaList1">
					<h3>Role</h3>
					<h4>Lead Agency</h4>
					<h3>Assignment</h3>
					<h4>Rebrand a premier fashion brand</h4>
					<h3>Channel</h3>
					<h4>Luxury Fashion Brand</h4>
				</div>
				<div className="hilfigerList2">
					<h3>Services</h3>
					<h4>Brand Direction</h4>
					<h4>Creative Direction</h4>
					<h4>Visual Design</h4>
					<h4>Technology</h4>
				</div>
			</div>
			<div className="vidText">
				<p>As a premier fashion brand, Tommy Hilfiger needed to re-present 
				themselves to their dedicated audience as an inspirational and authentic 
				brand.   The goal of the new site was to offer a seamless retail experience 
				while challenging their customers to go beyond and push their limits.</p>
			</div>
			<div className="babiesrusRow0">
			</div>
			<div className="babiesrusRow1">
				<img src={babiesrusBox1} />
			</div>
			<div className="babiesrusRow2">
				<img src={babiesrusBox2} />
			</div>
			<div className="babiesrusRow2">
				<img src={babiesrusBox3} />
			</div>
			<div className="babiesrusRow2">
				<img src={babiesrusBox4} />
			</div>
			<div className="babiesrusDevices2">
				<img src={babiesrusDevices} />
			</div>
			<div className="babiesrusDevices">
				<img src={babiesrusDevices_mobile} />
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

export default Babiesrus;