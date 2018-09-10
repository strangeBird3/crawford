import React, { Component } from 'react';
import styles from '../public/hilfiger.sass';
import hilfigerLogo from '../public/img/hilfigerLogo.jpg';
import threeIpads from '../public/img/3ipads.jpg';
import threeIpads2 from '../public/img/3ipads_mobile.jpg';
import watchShow1 from '../public/img/watchShow1.jpg';
import watchShow2 from '../public/img/watchShow2.jpg';

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

export default Hilfiger;