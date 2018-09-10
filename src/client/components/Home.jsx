import React, { Component } from 'react';
import styles from '../public/index.sass';
import { Link } from 'react-router-dom';
import emblem_iphone from '../public/img/emblem_iphone_mobile.jpg';
import menuIcon from '../public/img/menuIcon.jpg';
import emblemIcon from '../public/img/emblemIcon.jpg';

class Home extends React.PureComponent {
	constructor(props) {
	    super(props);

  	}


	render() {
		return(
		<div className="home">
			<div className="landingImg">
				<div className="landingTxt">
					<h2>I Design & Build Digital Experience to Help Brands Grow</h2>
					<p> My name is Todd Crawford, I'm UI/UX Designer and Entrepreneur with more than 7+
						years of Experience. I specialized with Web and Mobile Projects</p>
				</div>
			</div>
			<div className="myStory">
				<div className="storyContainer">
					<h1>A GUY TO WATCH</h1>
					<p>Comprehensive experience in designing within the digital space, working
						with high-profile clients to increase engagement & build revenue.</p>
					
				</div>
				<div className="storyButton">
					<button>MY STORY</button>
				</div>
			</div>
			<div className="caseStudies">
				<div className="blueArchitect pure-u-sm-1-3">
					<h2 className="h2_first">Architect</h2>
					<h2>Big Data</h2>
				</div>
				<div className="coachCarter pure-u-sm-1-3">
					<h2 className="h2_first2">Luxury Fashion</h2>
					<h2>Destination</h2>
				</div>
				<div className="hotModel pure-u-sm-1-3">
					<h2 className="h2_first3">Capture</h2>
					<h2>It Now</h2>
				</div>
			</div>
			<div className="emblemHealth">
				<div className="emblemText">
					<h4>EmblemHealth</h4>
					<h2>ABC's of Health Care Reform</h2>
					<p>The Patient Protection and Affordable Care Act is designed
						to provide quality health insurance options to everyone.</p>
					<img src={emblem_iphone} />
				</div>
			</div>
			<div className="caseNav">
				<img src={emblemIcon} />
				<ul>
					<li>1</li>
					<li>2</li>
					<li>3</li>
					<li>4</li>
					<li>5</li>
				</ul>
				<button className="caseButton">Case Study</button>
			</div>
			<div className="contactReviews">
				<li className="contactMe pure-u-md-1-2">
					<h2>CONTACT ME</h2>
					<h3>Tell me about your next big idea!</h3>
					<i class="arrowButton zmdi zmdi-arrow-right"></i>
				</li>
				<li className="kindWords pure-u-md-1-2">
					<h2>KIND WORDS FROM</h2>
					<h2>PAST CLIENTS</h2>
					<i class="arrowButton zmdi zmdi-arrow-right"></i>
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

export default Home;
