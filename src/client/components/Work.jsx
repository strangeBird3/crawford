import React, { Component } from 'react';
import styles from '../public/work.sass';
import { Link } from 'react-router-dom';

class Work extends React.PureComponent {
	render() {
		return(
		<div className="work">
			<div className="workLanding">
				<div className="workText">
					<h2>MY WORK</h2>
					<p> Explore</p>
				</div>
			</div>
			<div className="hillfiger">
				<Link  to="/hilfiger" className="menu">
					<div className="box1 pure-u-sm-1-2"> 
					</div>
				</Link>
				<Link  to="/eastdil" className="menu">
					<div className="box2 pure-u-sm-1-2">
						<h3>Real Time Investor Analytics App</h3>
						<h4>Eastdil Secured LLC/Wells Fargo<i className="zmdi zmdi-arrow-right"></i></h4>
					</div>
				</Link>
			</div>
			<div className="nurse">
				<Link  to="/boa" className="menu">
					<div className="box3 pure-u-sm-1-2">
						<h3>Online Banking and Investments</h3>
						<h4>Bank of America Merrill Lynch<i className="zmdi zmdi-arrow-right"></i></h4> 
					</div>
				</Link>
				<Link  to="/mcgraw" className="menu">
					<div className="box4 pure-u-sm-1-2">
					</div>
				</Link>
			</div>
			<div className="selectWheel">
			</div>
			<div className="apps">
				<Link  to="/precision" className="menu">
					<div className="box5 pure-u-sm-1-2">
					</div>
				</Link>
				<Link  to="/real" className="menu">
					<div className="box6 pure-u-sm-1-2">
					</div>
				</Link>
			</div>
			<div className="blue">
				<Link  to="/accenture" className="menu">
					<div className="box7 pure-u-sm-1-2">
					</div>
				</Link>
				<Link  to="/perfume" className="menu">
					<div className="box8 pure-u-sm-1-2">
					</div>
				</Link>
			</div>
			<div className="babies">
				<Link  to="/babiesrus" className="menu">
					<div className="box9 pure-u-sm-1-2">
					</div>
				</Link>
				<Link  to="/toysrus" className="menu">
					<div className="box10 pure-u-sm-1-2">
					</div>
				</Link>
			</div>
			<div className="emblem">
				<Link  to="/emblem" className="menu">
					<div className="box11 pure-u-sm-1-2">
						<h3>ABC's of Health Care Reform</h3>
						<h4>EmblemHealth<i className="zmdi zmdi-arrow-right"></i></h4>
					</div>
				</Link>
				<Link  to="/magnetique" className="menu">
					<div className="box12 pure-u-sm-1-2">
					</div>
				</Link>
			</div>
			<div className="scholastic">
				<Link  to="/scholastic" className="menu">
					<div className="box13 pure-u-sm-1-2">
					</div>
				</Link>
				<Link  to="/vital" className="menu">	
					<div className="box14 pure-u-sm-1-2">
					</div>
				</Link>
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

export default Work;