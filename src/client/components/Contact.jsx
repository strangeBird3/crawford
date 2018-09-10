import React, {Component} from 'react';
import styles from '../public/contact.sass';
import ufo from '../public/img/ufo.jpg';

class Contact extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: ''
		};

		this.handleName = this.handleName.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
		this.handleMessage = this.handleMessage.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleName(event) {
		this.setState({name: event.target.value});
	}

	handleEmail(event) {
		this.setState({email: event.target.value});
	}

	handleMessage(event) {
		this.setState({message: event.target.value});
	}

  	handleSubmit(event) {
    	alert('A name was submitted: ' + this.state.value);
    	event.preventDefault();
  	}

	render() {
		return(
			<div className="contact">
				<div className="contactImg">
					<div className="contactText">
						<h2>Let's work together.<span>Drop me a line below</span></h2>
						<p>As a designer I am always looking for new and exciting challenges. 
						Should you have a project in mind that you would like to collaborate 
						on please feel free to contact me.</p>
						<p> If you are a company looking to hire me full-time please leave me a 
						detailed email and I will get back to you asap.</p>	
					</div>
				</div>
				<div className="contactForm">
					<form className="pure-form pure-form-stacked pure-form-aligned">
						<label>
						    Your Name*
						     <input className="pure-input-1" type="text" value={this.state.name} onChange={this.handleName} placeholder="Hey There..." />
					  	</label>
					  	<label>
						    Email*
						     <input className="pure-input-1" type="text" value={this.state.email} onChange={this.handleEmail} placeholder="Contact Email..."/>
					  	</label>
					  	<label>
				          Message*
				         <textarea className="pure-input-1" value={this.state.message} onChange={this.handleMessage} placeholder="How can I help you?"/>
				        </label>
						<button>SUBMIT</button>
					</form>
				</div>
				<div className="contactInfo">
					<div className="pure-u-md-1-3">
						<li><i class="zmdi zmdi-pin"></i>34 Manchester Court</li>
						<li>Wayne, NJ 07470</li>
						<li>973-800-9304</li>
					</div>
					<p className="pure-u-md-1-3"><i class="zmdi zmdi-email"></i>crawford.todd30@gmail.com</p>
					<p className="pure-u-md-1-3"><i class="zmdi zmdi-skype"></i>tcrawford30</p>
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

export default Contact;
