import React, { Component } from 'react';
import styles from '../public/eastdil.sass';
import eastdilLogo from '../public/img/eastdilLogo.jpg';
import ipadHand from '../public/img/ipadHand.jpg';
import eastIpad1 from '../public/img/eastIpad1.jpg';
import eastIpad2 from '../public/img/eastIpad2.jpg';
import eastIpad3 from '../public/img/eastIpad3.jpg';

class Eastdil extends React.PureComponent {
	render() {
		return(
		<div className="eastdil">
			<div className="eastdilLanding">
				<div className="emblemText2">	
					<h4>Eastdil Secured LLC/Wells Fargo</h4>
					<h2>Real Time Investor Analytic App</h2>
					<h3>The Trusted Advisor Since 1976</h3>
				</div>
			</div>
			<div className="infoBar3">
				<div className="eastdilLogo">
					<img src={eastdilLogo} />
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
			<div className="eastdilText">
				<p><span>Ask:</span> Designed enterprise software for Investor and Executive Entrepreneur 
				dashboards with supporting user functions and activities including 
				analytics resource management, for commerce real estate.</p>
				<p><span>Team collaboration and transparency:</span> one of my big goals was to increase 
				collaboration and communication between the  design, development, and business leadership teams. 
				I implemented formal design reviews, created best practices around documentation and specification, 
				encouraged the team to do more prototyping, and insisted on whiteboard usage while talking through 
				problems. This helped to keep conversations on track and get everyone on the same page.
				</p>
				<p><span>Planning:</span> I  also spent a lot of time managing product and team intricacies. I 
				helped manage the design team’s workflow and  timelines, and assisted with planning small and 
				large product improvements and releases.
				</p>
			</div>
			<div className="eastdilText2">
				<div className="textSide pure-u-md-1-2">
					<p><span>User Research:</span> Drove user research and synthesis on multiple projects: created 
					personas and scenarios, led affinity diagramming sessions, created clickable prototypes for testing, 
					led remote and in-person test sessions, and advocated for changes based on test findings.</p>
					<p><span>Interaction Design:</span> Created competitive reviews, strategy documentation, concept models, 
					ecosystem maps, sitemaps, process flows, sketches, wireframes, and detailed specifications.  Worked in 
					both waterfall and agile methods on a variety of web interfaces including desktop,mobile, and tablet. 
					Led interaction design for responsive websites, mobile apps, and complex, large-scale Enterprise Dashboards.
					</p>
					<h1>Helping the world’s largest financial network become more effective with an internal 
					enterprise software for Investors & Entrepreneurs.</h1>
				</div>
				<div className="picSide pure-u-md-1-2">
					<img src={ipadHand} />
				</div>
			</div>
			<div className="emblemIphones">
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

export default Eastdil;