import React, { Component } from 'react';
import styles from '../public/boa.sass';
import boaLogo from '../public/img/boaLogo.jpg';
import ipadsWhite2 from '../public/img/3ipadsWhite.jpg';
import fallWalk from '../public/img/whitesWalking.jpg';
import { Link } from 'react-router-dom';

class Boa extends React.PureComponent {
	render() {
		return(
		<div className="boa">
			<div className="boaLanding">
				<div className="boaText">
					<h4>Bank of America Merill Lynch</h4>
					<h2>Online Banking and Investments</h2>
				</div>
			</div>
			<div className="infoBar">
				<div className="boaLogo">
					<img src={boaLogo} />
				</div>
				<div className="boaList1">
					<h3>Role</h3>
					<h4>Individual Designer on Internal Team</h4>
					<h3>Assignment</h3>
					<h4>Digital Campaign</h4>
					<h3>Channel</h3>
					<h4>Investment Banking</h4>
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
				<p>Developed and implemented innovative concepts and design strategies across 
				the full spectrum of the rich interactive media environment for consumers. 
				Translate concepts into wireframes and mockups that lead to intuitive user experiences.
				Facilitate client’s product visions by researching, conceiving, wire framing, 
				sketching, prototyping, and mocking up user experiences for digital products. 
				Make strategic design and user-experience decisions related to core, and new, 
				functions and features. Take smart risks and champion new ideas.</p>
			</div>
			<div className="ipadsWhite2">
				<img src={ipadsWhite2} />
			</div>
			<div className="fallWalk">
				<img src={fallWalk} />
			</div>
			<div className="ipadsFall">
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

export default Boa;