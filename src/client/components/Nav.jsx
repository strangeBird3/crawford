import React from 'react';
import styles from '../public/index.sass';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import navPic from '../public/img/navPic.jpg';

class Nav extends React.PureComponent {  
  constructor(props) {
	super(props)
	this.state = {
	 
	}

  } 


  render() {
		return(
        <Menu customBurgerIcon={ <img src="img/navPic.jpg" /> } >
			<li className="menu"><Link  to="/" className="menu">Home</Link></li>
			<li className="menu"><Link  to="/work" className="menu">Work</Link></li>
			<li className="menu"><Link  to="/about" className="menu ">About</Link></li>
			<li className="menu"><Link  to="/contact" className="menu">Contact</Link></li>
			<a  href="https://www.facebook.com/TdcGraphicDesign/" className="menu facebookNav"><i className="zmdi zmdi-facebook zmdi-hc-2x"></i></a>
			<a  href="https://www.linkedin.com/in/todd-crawford-a706814/" className="menu2 facebookNav"><i className="zmdi zmdi-linkedin zmdi-hc-2x"></i></a>
			<a  href="https://www.behance.net/ToddCrawford" className="menu2 facebookNav"><i className="zmdi zmdi-behance zmdi-hc-2x"></i></a>
		</Menu>		
		);
	 }
}


export default Nav;
