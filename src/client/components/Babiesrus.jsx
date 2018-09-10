import React, { Component } from 'react';
import styles from '../public/babiesrus.sass';
import babiesrusLogo from '../public/img/babiesrusLogo.jpg';
import babiesrusBox1 from '../public/img/babiesBox1.jpg';
import babiesrusBox2 from '../public/img/babiesBox2.jpg';
import babiesrusBox3 from '../public/img/babiesBox3.jpg';
import babiesrusBox4 from '../public/img/babiesBox4.jpg';
import babiesrusDevices_mobile from '../public/img/babiesrusDevices_mobile.jpg';
import babiesrusDevices from '../public/img/babiesrusDevices.jpg';
import { Link } from 'react-router-dom';

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

export default Babiesrus;