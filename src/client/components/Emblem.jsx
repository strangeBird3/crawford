import React, { Component } from 'react';
import styles from '../public/emblem.sass';
import emblemLogo from '../public/img/emblemLogo.jpg';
import greyIphones from '../public/img/greyIphones.jpg';
import emblemInfo from '../public/img/emblemInfo.jpg';
import emblemIphones from '../public/img/emblemIphones.jpg';
import emblem1 from '../public/img/emblem1.jpg';
import emblem2 from '../public/img/emblem2.jpg';
import emblem3 from '../public/img/emblem3.jpg';
import emblem4 from '../public/img/emblem4.jpg';
import { Link } from 'react-router-dom';

class Perfume extends React.PureComponent {
	render() {
		return(
		<div className="emblem">
			<div className="emblemLanding">
				<div className="emblemText">	
					<h4>EmblemHealth</h4>
					<h2>ABC's of Health Care Reform</h2>
					<h3>The Patient Protection and Affordable Care Act is designed 
					to provide quality health insurance options to everyone.</h3>
				</div>
			</div>
			<div className="infoBar3">
				<div className="emblemLogo">
					<img src={emblemLogo} />
				</div>
				<div className="boaList1">
					<h3>Role</h3>
					<h4>Lead Agency</h4>
					<h3>Assignment</h3>
					<h4>UI / Visual Design Services</h4>
					<h3>Channel</h3>
					<h4>Pharam</h4>
				</div>
				<div className="hilfigerList2">
					<h3>Services</h3>
					<h4>Brand Direction</h4>
					<h4>Creative Direction</h4>
					<h4>Visual Design</h4>
				</div>
			</div>
			<div className="vidText">
				<p>Created engagement on mobile and tablet devices. Developed 
				a multi-channel rich media campaign to allow consumers to shop 
				deals within the ads. Implemented a brand positioning strategy 
				for BabiesRUs on Facebook.</p>
			</div>
			<div className="greyIphones">
				<img src={greyIphones} />
			</div>
			<div className="emblem1">
				<img src={emblem1} />
			</div>
			<div className="emblem2">
				<img src={emblem2} />
			</div>
			<div className="emblem3">
				<img src={emblem3} />
			</div>
			<div className="emblem4">
				<img src={emblem4} />
			</div>
			<div className="emblemInfo">
				<img src={emblemInfo} />
			</div>
			<div className="emblemIphones">
				<img src={emblemIphones} />
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