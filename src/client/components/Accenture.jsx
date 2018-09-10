import React, { Component } from 'react';
import styles from '../public/accenture.sass';
import accentureLanding from '../public/img/wireframeLanding.jpg';
import accentureLogo from '../public/img/accentureLogo.jpg';
import accentureWireframe from '../public/img/wireframeTree.jpg';
import wire1 from '../public/img/wire1.jpg';
import wire2 from '../public/img/wire2.jpg';
import wire3 from '../public/img/wire3.jpg';
import wire4 from '../public/img/wire4.jpg';
import wire5 from '../public/img/wire5.jpg';
import wire6 from '../public/img/wire6.jpg';
import wire7 from '../public/img/wire7.jpg';
import wire8 from '../public/img/wire8.jpg';
import wire9 from '../public/img/wire9.jpg';
import wire10 from '../public/img/wire10.jpg';
import wire11 from '../public/img/wire11.jpg';
import wire12 from '../public/img/wire12.jpg';
import wire13 from '../public/img/wire13.jpg';
import wire14 from '../public/img/wire14.jpg';
import wire15 from '../public/img/wire15.jpg';
import wire16 from '../public/img/wire16.jpg';
import wire17 from '../public/img/wire17.jpg';
import wire18 from '../public/img/wire18.jpg';
import accentureIphones from '../public/img/execIphones.jpg';



class Accenture extends React.PureComponent {
	render() {
		return(
		<div className="accenture">
			<div className="accentureLanding">
				<img src={accentureLanding} />
			</div>
			<div className="infoBar4">
				<div className="accentureLogo">
					<img src={accentureLogo} />
				</div>
				<div className="boaList1">
					<h3>Role</h3>
					<h4>Lead Agency</h4>
					<h3>Assignment</h3>
					<h4>UI / Visual Design Services</h4>
					<h3>Channel</h3>
					<h4>Pharam</h4>
				</div>
				<div className="precisionList2">
					<h3>Services</h3>
					<h4>Brand Direction</h4>
					<h4>Creative Direction</h4>
					<h4>Visual Design</h4>
				</div>
			</div>
			<div className="eastdilText">
				<div className="accentureText1">
					<p><span>Ask:</span> UX  / UI, Design & Stragegy |  Health - Complete overhaul 
					of master theme system supporting multiple industry verticals from 
					desktop to a more mobile focus dashboard for real-time analytic dashboard 
					for  Defense Logistics Agency. 
					</p>
				</div>
			</div>
			<div className="accentureWireframe">
				<img src={accentureWireframe} />
			</div>
			<div className="realText2">
				<h2>Structures & Wireframes</h2>
			</div>
			<div className="borderLine1">
				<div className="borderWord1">
					<h4>Mobile</h4>
				</div>
			</div>
			<div className="accentureGrid1">
				<div className="wired pure-u-md-1-3"><img className="wire1" src={wire1} /></div>
				<div className="wired pure-u-md-1-3"><img className="wire2" src={wire2} /></div>
				<div className="wired pure-u-md-1-3"><img className="wire3" src={wire3} /></div>
				
			</div>
			<div className="accentureGrid1">
				<div className="wired pure-u-md-1-3"><img className="wire4" src={wire4} /></div>
				<div className="wired pure-u-md-1-3"><img className="wire5" src={wire5} /></div>
				<div className="wired pure-u-md-1-3"><img className="wire6" src={wire6} /></div>
				
				
				
			</div>
			<div className="accentureGrid1">
				<div className="wired pure-u-md-1-3"><img className="wire7" src={wire7} /></div>
				<div className="wired pure-u-md-1-3"><img className="wire8" src={wire8} /></div>
				<div className="wired pure-u-md-1-3"><img className="wire9" src={wire9} /></div>
				
				
			</div>
			<div className="accentureGrid1">
				<div className="wired pure-u-md-1-3"><img className="wire10" src={wire10} /></div>
				<div className="wired pure-u-md-1-3"><img className="wire11" src={wire11} /></div>
				<div className="wired pure-u-md-1-3"><img className="wire12" src={wire12} /></div>
				
			</div>
			<div className="accentureGrid1">
				<div className="wired pure-u-md-1-3"><img className="wire13" src={wire13} /></div>
				<div className="wired pure-u-md-1-3"><img className="wire14" src={wire14} /></div>
				<div className="wired pure-u-md-1-3"><img className="wire15" src={wire15} /></div>
			</div>
			<div className="accentureGrid1">
				<div className="wired pure-u-md-1-3"><img className="wire16" src={wire16} /></div>
				<div className="wired pure-u-md-1-3"><img className="wire17" src={wire17} /></div>
				<div className="wired pure-u-md-1-3"><img className="wire18" src={wire18} /></div>
			</div>
			<div className="accentureIphones">
				<img src={accentureIphones} />
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

export default Accenture;