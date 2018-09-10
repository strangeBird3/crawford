import React, { Component } from 'react';
import styles from '../public/testimonials.sass';
import usaIcon from '../public/img/usaIcon.jpg';
import toysrus from '../public/img/toysrusLogo.jpg';
import crawfordGirl from '../public/img/crawfordGirl.jpg';
import corpDude from '../public/img/corpDude.jpg';
import beardCeo from '../public/img/beardCeo.jpg';
import corpDude2 from '../public/img/corpDude2.jpg';
import houseLogo from '../public/img/houseLogo.jpg';



class Testimonials extends React.PureComponent {
	render() {
		return(
		<div className="testimonials">
			<div className="reviewHeader">
				<h2>Testimonials<span>Don't Take Our Word For It</span></h2>
				<p>Here are some nice words from those I have the pleasure of working with over the years</p>
			</div>
			<div className="testy1">
				<div className="testyIcon pure-u-md-1-5">
					<img src={usaIcon} />
				</div>
				<div className="testyText pure-u-md-3-5">
					<p>Government Dashboard Project</p>
					<p>Just got off the phone with Randy and he wanted to pass on the General’s compliments to the 
					team for a job well done.  Randy stated that all the comments from the participants were very positive.  
					All your heroic efforts to make the Dashboard presentation at the Executive Board meeting successful 
					are very much appreciated by Randy and myself.  You may bask in the sunshine for your achievement.  
					You have set a high bar and we will continue to excel.</p>
					<h3>Jo Brewer, PMP<span>Enterprise Data Solutions (EDS) | Project Integrator (J62KA ) | Information Operations (J6 ) |Defense Logistics Agency</span></h3>
				</div>
			</div>
			<div className="testy2">
				<div className="testyIcon pure-u-md-1-5">
					<img src={toysrus} />
				</div>
				<div className="testyText pure-u-md-3-5">
					<p>Panddora Project UI Skin - Great job! </p>
					<p>Alysse Zecha | Associate Manager, Broadcast Media Marketing - This just came on! Love seeing it. Looks incredible - Todd</p>
					<p>Toys”R”US  : Panddora Project UI Skin - Great job! </p>
				</div>
			</div>
			<div className="testy1">
				<div className="testyIcon pure-u-md-1-5">
					<img src={crawfordGirl} />
				</div>
				<div className="testyText pure-u-md-3-5">
					<p>“I really want to thank you for coming in and pitching in this last week. You did a great job and really helped me out!”</p>
					<h3>Rosie Amodio<span>Principal Been There LLC</span></h3>
				</div>
			</div>
			<div className="testy2">
				<div className="testyIcon pure-u-md-1-5">
					<img src={corpDude} />
				</div>
				<div className="testyText pure-u-md-3-5">
					<p>Todd and I worked together on several projects and he was always willing to go that extra mile to make our clients happy 
					and (just as importantly) deliver quality and effective work. He accomplished this in a particularly fast-paced and 
					challenging environment and I would recommend him and his skills in digital design work.</p>
					<h3>Douglas Cirillo<span>Assistant Vice President, Director of Search Engine Optimization at Sotheby's</span></h3>
				</div>
			</div>
			<div className="testy1">
				<div className="testyIcon pure-u-md-1-5">
					<img src={beardCeo} />
				</div>
				<div className="testyText pure-u-md-3-5">
					<p>I wanted to take a moment to thank you for covering for Meilee for the last 2 weeks.  We enjoyed having you on the team and 
					hope that we’ll have a chance to work with you again in the future.</p>
					<h3>Stephen Hildebrand<span>Senior Director, Technical & Digital Operations at NBC Sports</span></h3>
				</div>
			</div>
			<div className="testy2">
				<div className="testyIcon pure-u-md-1-5">
					<img src={corpDude2} />
				</div>
				<div className="testyText pure-u-md-3-5">
					<p>I just had a call from the above referenced client indicating that he wants to go live – 
					no problem the site is in  the launch process.During the call he was more than effusive in his 
					compliments to both Todd Crawford for the design (the kid really knows his stuff – his words) and to 
					Jacky Burke for her patience in getting the content from him (almost like pulling teeth – again his words).
					My compliments and thanks to both Jacky and Todd.</p>
					<h3>Neil Chapman<span>Attorney at Law</span></h3>
				</div>
			</div>
			<div className="testy1">
				<div className="testyIcon pure-u-md-1-5">
					<img src={houseLogo} />
				</div>
				<div className="testyText pure-u-md-3-5">
					<p>Thank you! I’m glad you liked it…had the call with the client earlier today. They loved it as well; with these edits 
					in place, we should be set to launch beginning next week (they would be able to approve sooner but their network has been 
					down so it’ll take a day or two before they’ll able to review the updated site).</p>
					<h3>Hall, Ricketts, Marky & Gurbacki, P.C.</h3>
				</div>
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

export default Testimonials;