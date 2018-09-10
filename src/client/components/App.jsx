import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';


import Nav from './Nav.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Testimonials from './Testimonials.jsx';
import Contact from './Contact.jsx';
import Work from './Work.jsx';
import Mcgraw from './Mcgraw.jsx';
import Hilfiger from './Hilfiger.jsx';
import Boa from './Boa.jsx';
import Babiesrus from './Babiesrus.jsx';
import Toysrus from './Toysrus.jsx';
import Perfume from './Perfume.jsx';
import Emblem from './Emblem.jsx';
import Eastdil from './Eastdil.jsx';
import Precision from './Precision.jsx';
import Real from './Real.jsx';
import Accenture from './Accenture.jsx';
import Magnetique from './Magnetique.jsx';
import Scholastic from './Scholastic.jsx';
import Vital from './Vital.jsx';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}

	}


	render() {
		return(
		<div className="">
			<Nav />
			<Switch>
				<Route exact path="/" component={Home}/>
	          		<Route path="/about" component={About}/>
	        		<Route path="/testimonials" component={Testimonials}/>
					<Route path="/contact" component={Contact}/>
					<Route path="/work" component={Work}/>
					<Route path="/mcgraw" component={Mcgraw}/>
					<Route path="/hilfiger" component={Hilfiger}/>
					<Route path="/boa" component={Boa}/>
					<Route path="/babiesrus" component={Babiesrus}/>
					<Route path="/toysrus" component={Toysrus}/>
					<Route path="/perfume" component={Perfume}/>
					<Route path="/emblem" component={Emblem}/>
					<Route path="/eastdil" component={Eastdil}/>
					<Route path="/precision" component={Precision}/>
					<Route path="/real" component={Real}/>
					<Route path="/accenture" component={Accenture}/>
					<Route path="/magnetique" component={Magnetique}/>
					<Route path="/scholastic" component={Scholastic}/>
					<Route path="/vital" component={Vital}/>
	        	</Switch>
	    </div>
		);
	}
}

export default App;
