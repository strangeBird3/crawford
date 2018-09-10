import React, { Component } from 'react';
import styles from '../public/mcgraw.sass';
import mcgrawLogo from '../public/img/mcgrawLogo.jpg';
import mcgrawGirl from '../public/img/mcgrawGirl.jpg';
import boxes1 from '../public/img/mcgrawBox1.jpg';
import boxes2 from '../public/img/mcgrawBox2.jpg';
import boxes3 from '../public/img/mcgrawBox3.jpg';
import boxes4 from '../public/img/mcgrawBox4.jpg';
import learnsmartDevices from '../public/img/learnsmartDevices.jpg';
import learnsmartDevices2 from '../public/img/learnsmartDevices_mobile.jpg'
import { Link } from 'react-router-dom';

class Mcgraw extends React.PureComponent {
	render() {
		return(
		<div className="work">
			<div className="mcgrawImg">
				<div className="mcgrawText">
					<div className="mcgrawIcons">
						<i className="zmdi zmdi-facebook"></i>
						<i className="zmdi zmdi-twitter"></i>
						<i className="zmdi zmdi-youtube zmdi-hc-2x"></i>
					</div>
					<h4>McGraw-Hill Education</h4>
					<h2>The Evolution of Learning</h2>
					<h3>LearnSmart is the grade you've always wanted</h3>
				</div>
			</div>
			<div className="infoBar">
				<div className="mcgrawPrelogo"></div>
				<div className="mcgrawLogo">
					<img src={mcgrawLogo} />
				</div>
				<div className="mcgrawList1">
					<h3>Role</h3>
					<h4>Lead Agency</h4>
					<h3>Assignment</h3>
					<h4>Social Media Campaign</h4>
					<h3>Channel</h3>
					<h4>Digital Education</h4>
				</div>
				<div className="mcgrawList2">
					<h3>Services</h3>
					<h4>Brand Direction</h4>
					<h4>Creative Direction</h4>
					<h4>Visual Design</h4>
					<h4>Technology</h4>
				</div>
			</div>
			<div className="vidText">
				<p>Coroboratively working with the in-house marketing department to create
				a custom social media campaign that embraces Learnsmart Advantage Platform. The 
				social platforms were used to help high school and college kids to improve grades by a full letter.</p>
			</div>
			<div className="vidContainer">
				<iframe width="560" height="315" 
				src="https://www.youtube.com/embed/MDYX5KoSer0?rel=0&amp;controls=0&amp;showinfo=0" 
				frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
				</iframe>
			</div>
			<div className="mcgrawBoxes">
				<div className="mcgrawboxes1"><img className="boxrow1" src={boxes1} /><img src={boxes2} /></div>
				<div className="mcgrawboxes2"><img className="boxrow2" src={boxes3} /><img src={boxes4} /></div>
			</div>
			<div className="learnSmart">
				<img src={learnsmartDevices} />
			</div>
			<div className="learnSmart2">
				<img src={learnsmartDevices2} />
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

export default Mcgraw;