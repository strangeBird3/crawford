import React, { Component } from 'react';
import styles from '../public/real.sass';
import realLanding from '../public/img/realLanding.jpg';
import realLogo from '../public/img/realLogo.jpg';
import realPic1 from '../public/img/realPic1.jpg';
import realGrid1 from '../public/img/realGrid1.jpg';
import realGrid2 from '../public/img/realGrid2.jpg';
import realGrid3 from '../public/img/realGrid3.jpg';
import realGrid4 from '../public/img/realGrid4.jpg';
import realGrid5 from '../public/img/realGrid5.jpg';
import realGrid6 from '../public/img/realGrid6.jpg';
import realGrid7 from '../public/img/realGrid7.jpg';
import realGrid8 from '../public/img/realGrid8.jpg';
import realMiddle from '../public/img/realMiddle.jpg';
import realMap1 from '../public/img/realMap1.jpg';
import realMap2 from '../public/img/realMap2.jpg';
import { Link } from 'react-router-dom';



class Real extends React.PureComponent {
	render() {
		return(
		<div className="real">
			<div className="realLanding">
				<img src={realLanding} />
			</div>
			<div className="infoBar4">
				<div className="realLogo">
					<img src={realLogo} />
				</div>
				<div className="boaList1">
					<h3>Role</h3>
					<h4>Lead Agency</h4>
					<h3>Assignment</h3>
					<h4>UI / Visual Design Services</h4>
					
				</div>
				<div className="precisionList2">
					<h3>Services</h3>
					<h4>Brand Direction</h4>
					<h4>Creative Direction</h4>
					<h4>Visual Design</h4>
				</div>
			</div>
			<div className="eastdilText">
				<div className="realText1 pure-u-md-1-2">
					<h2>Background & Challenge</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing 
					elit. Sed ac justo et ex lacinia gravida in sit amet orci. Nulla 
					vulputate semper magna at condimentum. Vestibulum nisl ante, ornare 
					scelerisque velit ac, posuere vehicula risus. Integer ut gravida mi. 
					</p>
				</div>
				<div className="realPic1 pure-u-md-1-2">
					<img src={realPic1} />
				</div>
			</div>
			<div className="realText2">
				<h2>Structures & Wireframes</h2>
				<p>Due to a limited timeline the wireframes were 
				made right away. A simple structure with accuarte proportions allowed to start 
				development in agile mode for a quick MVP launch.</p>
			</div>
			<div className="borderLine1">
				<div className="borderWord1">
					<h4>Desktop</h4>
				</div>
			</div>
			<div className="realGrid1">
				<div className="pure-u-md-1-2"><img className="realImg1 pure-u-md-1-2" src={realGrid1} /></div>
				<div className="pure-u-md-1-2"><img className="realImg2 pure-u-md-1-2" src={realGrid2} /></div>
			</div>
			<div className="realGrid2">
				<div className="pure-u-md-1-2"><img className="realImg3" src={realGrid3} /></div>
				<div className="pure-u-md-1-2"><img className="realImg4" src={realGrid4} /></div>
			</div>
			<div className="realText3">
				<p>As always the styleguide was very well throught out 
				and was used by developers. An easy and modern layout was 
				meant to make everyday routine process a pleasant process 
				and help both employes and emplyers not to quit the app for a 
				long time</p>
			</div>
			<div className="borderLine2">
				<div className="borderWord2">
					<h4>Color Palette</h4>
				</div>
			</div>
			<div className="realGrid3">
				<img className="realImg5" src={realGrid5} />
				<img className="realImg6" src={realGrid6} />
			</div>
			<div className="realGrid4">
				<img className="realImg7" src={realGrid7} />
				<img className="realImg8" src={realGrid8} />
			</div>
			<div className="realMiddle">
				<img src={realMiddle} />
			</div>
			<div className="borderLine3">
				<div className="borderWord3">
					<h4>Functional Modules</h4>
				</div>
			</div>
			<div className="eastdilText">
				<div className="realPic3 pure-u-md-2-3">
					<img src={realMap1} />
				</div>
				<div className="realTextBottom pure-u-md-1-3">
					<h2>Transactions</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing 
					elit. Sed ac justo et ex lacinia gravida in sit amet orci. Nulla 
					vulputate semper magna at condimentum. Vestibulum nisl ante, ornare 
					scelerisque velit ac, posuere vehicula risus. Integer ut gravida mi. 
					</p>
				</div>

			</div>
			<div className="borderLine4">

			</div>
			<div className="eastdilText">
				<div className="realTextBottom pure-u-md-1-3">
					<h2>Global America Metro Zones</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing 
					elit. Sed ac justo et ex lacinia gravida in sit amet orci. Nulla 
					vulputate semper magna at condimentum. Vestibulum nisl ante, ornare 
					scelerisque velit ac, posuere vehicula risus. Integer ut gravida mi. 
					</p>
				</div>
				<div className="realPic2 pure-u-md-2-3">
					<img src={realMap2} />
				</div>
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

export default Real;