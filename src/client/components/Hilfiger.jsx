import React, { Component } from 'react';
import styles from '../public/hilfiger.sass';
import hilfigerLogo from '../public/img/hilfigerLogo.jpg';
import threeIpads from '../public/img/3ipads.jpg';
import threeIpads2 from '../public/img/3ipads_mobile.jpg';
import watchShow1 from '../public/img/watchShow1.jpg';
import watchShow2 from '../public/img/watchShow2.jpg';
import { Link } from 'react-router-dom';

class Hilfiger extends React.PureComponent {
	render() {
		return(
		<div className="hilfiger">
			<div className="hilfigerLanding">
				<div className="hilfigerText">
					<h4>Tommy Hilfiger</h4>
					<h2>Premier Fashion Brand</h2>
				</div>
			</div>
			<div className="infoBar">
				<div className="hilfigerLogo">
					<img src={hilfigerLogo} />
				</div>
				<div className="hilfigerList1">
					<h3>Role</h3>
					<h4>Lead Agency</h4>
					<h3>Assignment</h3>
					<h4>Rebrand a premier fashion brand</h4>
					<h3>Channel</h3>
					<h4>Luxury Fashion Brand</h4>
				</div>
				<div className="hilfigerList2">
					<h3>Brand Direction</h3>
					<h4>Creative Direction</h4>
					<h4>Visual Design</h4>
					<h4>Technology</h4>
				</div>
			</div>
			<div className="vidText">
				<p>As a premier fashion brand, Tommy Hilfiger needed to re-present 
				themselves to their dedicated audience as an inspirational and authentic brand.
				The goal of the new site was to offer a seamless retail experience while challenging 
				their customers to go beyond and push their limits.</p>
			</div>
			<div className="threeIpads">
				<img src={threeIpads} />
			</div>
			<div className="threeIpads2">
				<img src={threeIpads2} />
			</div>
			<div className="watchTheShow">
			</div>
			<div className="watchShow1">
				<img src={watchShow1} />
			</div>
			<div className="watchShow2">
				<img src={watchShow2} />
			</div>
			<div className="4deviecs">
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

export default Hilfiger;