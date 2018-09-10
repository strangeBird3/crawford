import React, { Component } from 'react';
import styles from '../public/about.sass';
import bwTodd from '../public/img/bwTodd.jpg';
import toddSig from '../public/img/toddSig.jpg';

class About extends React.PureComponent {
	render() {
		return(
		<div className="about">
			<div className="aboutMe">
				<div className="profilePic pure-u-md-1-3"> 
					<img src={bwTodd} />
				</div>
				<div className="aboutText pure-u-md-5-12">
`					<h2>About Me</h2>
					<p>I’m Todd David Crawford,  an UX /UI Senior Designer with a 
					comprehensive experience in designing within the digital space, 
					working with high proﬁle clients to increase engagement and build 
					revenue. I consistently produce user-centric, original and profitable 
					concepts for brands and products. I have a proven track record in utilizing 
					all available resources to efficiently manage complex projects to completion 
					on time and within budget. I’m a visionary leader with a high team retention 
					rate who consistently influences team skill development for maximum results.</p>
					<p>I invite you to explore my portfolio encompasses from problem solving UX/UI, 
					branding and successfully executed business strategies.</p>
					<img src={toddSig} />
				</div>
			</div>
			<div className="hobbies">
				<h2>My Interests</h2>
					<ul className="listIcons">
						<li><i className="zmdi zmdi-car"></i></li>
						<li><i className="zmdi zmdi-airplane"></i></li>
						<li><i className="zmdi zmdi-headset"></i></li>
						<li><i className="zmdi zmdi-coffee"></i></li>
						<li><i className="zmdi zmdi-airplane"></i></li>
						<li><i className="zmdi zmdi-brush"></i></li>
						<li><i className="zmdi zmdi-bug"></i></li>
					</ul>
			</div>
			<div className="workExpBackground">
				<div className="workExp">
					<div className="headerExp">
						<i className="zmdi zmdi-car"></i><span>Work Experience</span>
					</div>
					<div className="blueLines"></div>
					<div className="body">
						<i className="zmdi zmdi-dot-circle-alt"></i><span className="aquentDot">Aquent Inc.</span>
						<h4 className="aquentTitle">Accenture Federal - UI/UX Designer • Remote |  Currenlty • Security information : IT2 </h4>
						<p>Directing a design team working cross-functional team in an Agile environment. Interpret client requirements, 
						and research and present different design solutions.  Proactive and resourceful working various stakeholders 
						doing research wire-framing   and visual design for government dashboard.  Researched, developed, and 
						designed UI / UX standard  and brand style guides to increase consistency and reduce delivery timelines. 
						Supported UI / UX design working sessions with clients to review developed design artifacts to ensure that 
						designs met functional requirements and were usable by the end users.  Designed user centric UI assets and 
						layouts including wireframes, design speciﬁcations, colors, icons, style guides, site map, user flow and 
						UI/UX agile acceptance criteria. </p>
						<p>Leveraged external design materials and reference code (D3, JavaScript) to identify, adapt, and develop 
						advanced visualizations to support client requirements. Responsible for preparing reference, training, and 
						communication materials including Quick Start Guides. Developed responsive, user-centric, Dashboard framework 
						to enhance end user experience on desktop and mobile devices. Directing a design team working cross-functional 
						team in an Agile environment. </p>
						<p className="bottomP">Develop tile capabilities in support of executive dashboard and Work with client stakeholders to design and 
						develop and executive dashboard for senior leadership.</p>
						<div className="blueLines"></div>
						<h4>Wells Fargo / Eastdil Secured • New York, NY - UI/ Visual Designer  | JAN 2015 to MAY 2015</h4>
						<p>Designed enterprise software for Investor and Executive Entrepreneur dashboards with supporting 
						user functions and activities including analytics resource management, for commerce real estate.</p>
						<p>Team collaboration and transparency: one of my big goals was to increase collaboration and communication 
						between the design, development, and business leadership teams. I implemented formal design reviews, created 
						best practices around documentation and speciﬁcation, encouraged the team to do more prototyping, and insisted 
						on whiteboard usage while talking through problems. This helped to keep conversations on track and get everyone 
						on the same page.</p>
						<p>Planning: I also spent a lot of time managing product and team intricacies. I helped manage the design team’s 
						workflow and timelines, and assisted with planning small and large product improvements and releases.  </p>
						<p>User Research: Drove user research and synthesis on multiple projects: created personas and scenarios, led afﬁnity 
						diagramming sessions, created clickable prototypes for testing, led remote and in-person test sessions, and advocated 
						for changes based on test ﬁndings. </p>
						<p className="bottomP">Interaction Design: Created competitive reviews, strategy documentation, concept models, ecosystem maps, sitemaps, 
						process flows, sketches, wireframes, and detailed speciﬁcations. Worked in both waterfall and agile methods on a variety 
						of web interfaces including desktop, mobile, and tablet. Led interaction design for responsive websites, mobile apps, and 
						complex, large-scale Enterprise Dashboards. </p>
						<div className="blueLines"></div>
						<h4>Bank of America Merrill Lynch • New York, NY - UI/ UX Designer  | AUG 2014 to JAN 2015 </h4>
						<p>Developed and implemented innovative concepts and design strategies across the full spectrum the rich interactive 
						media environment for consumers.</p>
						<p className="bottomP">Translate concepts into wireframes and mockups that lead to intuitive user  experiences. Facilitate client’s product visions 
						by researching, conceiving, wire framing, sketching, prototyping, and mocking up user experiences for digital products. 
						Make strategic design and user-experience decisions related to core, and new, functions and features. Take smart risks and 
						champion new ideas. </p>
						<div className="blueLines"></div>
						<h4>ADP Innovation Lab • New York, NY - UI/ UX Designer  | MAR 2014 to AUG 2014 </h4>
						<p>Responsible for creating responsive design (web, tablet, mobile)by prototyping and recreating a global payroll. Interaction 
						Design: Created competitive reviews, strategy documentation, concept models, ecosystem maps, sitemaps, process flows, sketches, 
						wireframes, and detailed speciﬁcations. Worked in both waterfall and agile methods on a variety of web interfaces including 
						desktop, mobile, and tablet. Led interaction design for responsive websites, mobile apps, and complex, large-scale 
						Enterprise Dashboards. </p>
						<p className="bottomP">User Research: Drove user research and synthesis on multiple projects: created personas and scenarios, led afﬁnity diagramming 
						sessions, created clickable prototypes for testing, led remote and in-person test sessions, and advocated for changes based on 
						test ﬁndings</p>
						<div className="blueLines"></div>
						<div className="blueLines"></div>
						<i className="zmdi zmdi-dot-circle-alt"></i><span className="blueAdjust">Todd David Crawford</span>
						<h4 className="blueOwner">Owner / Design Principal</h4>
						<p>Freelance company I started to give small to medium-sized businesses access to quality design work at an affordable price. 
						Responsibilities include consulting with clients, figuring out their marketing needs and designing unique business collateral 
						based on those needs, as well as handling the pre- and post-production deliverables. Having a Comprehensive experience in 
						designing within the digital space, working with high proﬁle clients to increase engagement and build revenue. Strong strategic 
						planning skills and ability to identify opportunities for brand development and audience building. Expertise in UX/UI, as well as 
						visual design.</p>
						<p>I bring with me, a diversified set of skills in design for web & UX/ UI, mobile & Tablet, and project management. I work hard and 
						play hard. I have been working in the creative field for over several years specializing in Design with an emphasis on creative and 
						interactive interfaces. I have experience using all of the latest technologies as well as experience working in larger agencies, 
						corporations, as part of a small team or independently. Through the years, I have been fortunate enough to have worked with various 
						companies and agencies with impressive client rosters such as: AMC Networks Inc., Bloomingdales, CBS Radio, Delia's Inc., Estée Lauder , 
						Scholastic Fox News/Fox Business, Food Network/Scripps Network, Hearst Newspaper Digital, LexisNexis , Merck & Co. Inc., 
						McGraw-Hill,MoneyLion,  Musicnet Inc., NBC Sports, NewThinkCreative  Ogilvy Interactive Worldwide, Pricewaterhousecoopers LLP, 
						Real Capital Analytics Inc.  Samsung, Spiegel Brands, & Target Toys”R”US Inc , Tommy Hilfiger, 
						The Wall Street Journal Digital Network.</p>
						<div className="resumeButton"><button><i className="zmdi zmdi-cloud-download"></i>Download Resume</button></div>
					</div>
				</div>
			</div>
			<div className="eduBackground">
				<div className="body2">
					<div className="headerExp"><i className="education zmdi zmdi-car"></i><span>Education</span></div>
					<div className="blueLines"></div>
					<h4>Farleigh Dickinson University Bachelors of Fine Arts  |   Cum Laude 2001</h4>
					<div className="blueLines"></div>
					<h4 className="ICAGILE">ICAGILE Certified Professional | JAN 2018</h4>
					<i className="specialCircle zmdi zmdi-circle"></i>
				</div>
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

export default About;