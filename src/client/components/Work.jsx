import React, { Component } from 'react';
import styles from '../public/work.sass';

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
				<div className="box1 pure-u-sm-1-2"> 
				</div>
				<div className="box2 pure-u-sm-1-2">
					<h3>Real Time Investor Analytics App</h3>
					<h4>Eastdil Secured LLC/Wells Fargo<i class="zmdi zmdi-arrow-right"></i></h4>
				</div>
			</div>
			<div className="nurse">
				<div className="box3 pure-u-sm-1-2">
					<h3>Online Banking and Investments</h3>
					<h4>Bank of America Merrill Lynch<i class="zmdi zmdi-arrow-right"></i></h4> 
				</div>
				<div className="box4 pure-u-sm-1-2">
				</div>
			</div>
			<div className="selectWheel">
			</div>
			<div className="apps">
				<div className="box5 pure-u-sm-1-2">
				</div>
				<div className="box6 pure-u-sm-1-2">
				</div>
			</div>
			<div className="blue">
				<div className="box7 pure-u-sm-1-2">
				</div>
				<div className="box8 pure-u-sm-1-2">
				</div>
			</div>
			<div className="babies">
				<div className="box9 pure-u-sm-1-2">
				</div>
				<div className="box10 pure-u-sm-1-2">
				</div>
			</div>
			<div className="emblem">
				<div className="box11 pure-u-sm-1-2">
					<h3>ABC's of Health Care Reform</h3>
					<h4>EmblemHealth<i class="zmdi zmdi-arrow-right"></i></h4>
				</div>
				<div className="box12 pure-u-sm-1-2">
				</div>
			</div>
			<div className="scholastic">
				<div className="box13 pure-u-sm-1-2">
				</div>
				<div className="box14 pure-u-sm-1-2">
				</div>
			</div>
			<div className="socialFooter">
				<span>&copy; TODD DAVID CRAWFORD. ALL RIGHTS RESERVED.</span>
				<ul className="socialIcons">
					<i class="zmdi zmdi-facebook"></i>
					<i class="zmdi zmdi-linkedin"></i>
					<i class="zmdi zmdi-behance"></i>
				</ul>
			</div>
		</div>
	  
		);
	}
}

export default Work;