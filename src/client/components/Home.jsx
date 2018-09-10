import React, { Component } from 'react';
import styles from '../public/index.sass';
import styles2 from '../public/carousel.css';
import { Link } from 'react-router-dom';
import emblem_iphone from '../public/img/emblem_iphone_mobile.jpg';
import menuIcon from '../public/img/menuIcon.jpg';
import emblemIcon from '../public/img/emblemIcon.jpg';

import wireframeTed from '../public/img/wireframeTed.jpg';
import coach_carter from '../public/img/coach_carter.jpg';
import hot_model from '../public/img/hot_model.jpg';
import scholasticKid from '../public/img/scholasticKid.jpg';
import pharamIpads from '../public/img/pharamIpads.jpg';
import imac from '../public/img/imac.jpg';

import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends React.Component {
    render() {
        return (
            <Carousel centerMode centerSlidePercentage={50} emulateTouch 
            showStatus={false} showThumbs={false}>
                <div>
                    <img src={wireframeTed} />
                    <Link  to="/accenture" className=""><p className="legend"><i class="zmdi zmdi-time-interval zmdi-hc-2x"></i></p></Link>
                </div>
                <div>
                    <img src={coach_carter} />
                      <Link  to="/hilfiger" className=""><p className="legend"><i class="zmdi zmdi-time-interval zmdi-hc-2x"></i></p></Link>
                </div>
                <div>
                    <img src={hot_model} />
                      <Link  to="/magnetique" className=""><p className="legend"><i class="zmdi zmdi-time-interval zmdi-hc-2x"></i></p></Link>
                </div>
                <div>
                    <img src={scholasticKid} />
                      <Link  to="/scholastic" className=""><p className="legend"><i class="zmdi zmdi-time-interval zmdi-hc-2x"></i></p></Link>
                </div>
                <div>
                    <img src={pharamIpads} />
                      <Link  to="/precision" className=""><p className="legend"><i class="zmdi zmdi-time-interval zmdi-hc-2x"></i></p></Link>
                </div>
                <div>
                    <img src={imac} />
                     <Link  to="/real" className=""><p className="legend"><i class="zmdi zmdi-time-interval zmdi-hc-2x"></i></p></Link>
                </div>
            </Carousel>
        );
    }
};

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
		
			<DemoCarousel />
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
					<Link  to="/contact" className=""><h2>CONTACT ME</h2></Link>
					<Link  to="/contact" className=""><h3>Tell me about your next big idea!</h3></Link>
					<Link  to="/contact" className=""><i className="arrowButton zmdi zmdi-arrow-right"></i></Link>
				</li>
				<li className="kindWords pure-u-md-1-2">
					<Link  to="/testimonials" className=""><h2>KIND WORDS FROM</h2></Link>
					<Link  to="/testimonials" className=""><h2>PAST CLIENTS</h2></Link>
					<Link  to="/testimonials" className=""><i className="arrowButton zmdi zmdi-arrow-right"></i></Link>
				</li>
			</div>
			<div className="socialFooter">
				<span>&copy; TODD DAVID CRAWFORD. ALL RIGHTS RESERVED.</span>
				<ul className="socialIcons">
					<a  href="https://www.facebook.com/TdcGraphicDesign/" className=""><i className="zmdi zmdi-facebook"></i></a>
					<a  href="https://www.linkedin.com/in/todd-crawford-a706814/" className=""><i className="zmdi zmdi-linkedin"></i></a>
					<a  href="https://www.behance.net/ToddCrawford" className=""><i className="zmdi zmdi-behance"></i></a>
				</ul>
			</div>
		</div>
		  
		);
	}
}

export default Home;
