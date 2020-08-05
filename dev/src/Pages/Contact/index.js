import React, { useContext, useEffect } from 'react';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

// import './styles.scss';
import Section from '../../Components/Section/Section';
import { Link } from './Link/Link';

import { Box, Button } from './styles';

import AppContext from '../../utils/AppContext';

export default function Contact() {
	const { mainRef } = useContext(AppContext);
	useEffect(() => {
		if (mainRef.current) {
			mainRef.current.scroll({top: 0, left: 0, behavior: 'smooth' });
		}
	}, [mainRef]);
	return (
		<Section>
			<Link
				icon={faMapMarkerAlt}
				title="Location"
				href="https://www.google.com/maps/place/Melbourne+VIC/@-37.9701476,144.4913173,9z/data=!3m1!4b1!4m5!3m4!1s0x6ad646b5d2ba4df7:0x4045675218ccd90!8m2!3d-37.8136276!4d144.9630576"
				text="Melbourne, VIC, Australia"
			/>
			<Link
				icon={faEnvelope}
				title="Email"
				href="mailto:cynthiaswong88@gmail.com"
				text="cynthiaswong88@gmail.com"
			/>
			<Link
				icon={faLinkedin}
				title="LinkedIn"
				href="https://www.linkedin.com/in/cynthia-wong-29944348/"
			/>
			<Link
				icon={faGithub}
				title="GitHub"
				href="https://github.com/cynwong"
			/>
			<Link
				icon={faWordpress}
				title="Wordpress"
				href="https://cynw.wordpress.com"
			/>
			<Box>
				<p>
					{
						"Have a question? Want to work together? or Simply wish to connect?"
					}
				</p>
				<Button href='mailto:cynthiaswong88@gmail.com'>
					Contact me
				</Button>
			</Box>
		</Section>

		// 			<div id='contact-me'>
		// 				<p>
		// 					Have a question? Want to work together? or Simply wish to connect?
		// 				</p>
		// 				<a href='mailto:cynthiaswong88@gmail.com' className='btn btn-contact'>Contact Me</a>
		// 			</div>
		// 		</div>
		// 	</section>
	)
}
