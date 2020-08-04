import React, { useContext, useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

import AppContext from '../../utils/AppContext';

export default function Contact() {
	const { mainRef } = useContext(AppContext);
	useEffect(() => {
		if (mainRef.current) {
			mainRef.current.scroll({top: 0, left: 0, behavior: 'smooth' });
		}
	}, [mainRef]);
	return (
		<section className='contact'>
				<div className='section-content'>
					<div className='contact location'>
						<FontAwesomeIcon icon={faMapMarkerAlt} title='Location' />
						<span className="colon">:</span> 
						<a 
							href='https://www.google.com/maps/place/Melbourne+VIC/@-37.9701476,144.4913173,9z/data=!3m1!4b1!4m5!3m4!1s0x6ad646b5d2ba4df7:0x4045675218ccd90!8m2!3d-37.8136276!4d144.9630576'
							target='_blank'
							rel="noopener noreferrer"
						>
							Melbourne, VIC, Australia
						</a>
					</div>
					<div className='contact email'>
						<FontAwesomeIcon icon={faEnvelope} title='Email' />
						<span className="colon">:</span> 
						<a href='mailto:cynthiaswong88@gmail.com'>cynthiaswong88@gmail.com</a>
					</div>
					<div className='contact linkedIn'>
						<FontAwesomeIcon icon={faLinkedin} title='LinkedIn' />
						<span className="colon">:</span> 
						<a 
							href='https://www.linkedin.com/in/cynthia-wong-29944348/'
							target='_blank'
							rel="noopener noreferrer"
						>
							www.linkedin.com/in/cynthia-wong-29944348/
						</a>
					</div>
					<div className='contact github'>
						<FontAwesomeIcon icon={faGithub} title='GitHub' />
						<span className="colon">:</span> 
						<a 
							href='https://github.com/cynwong'
							target='_blank'
							rel="noopener noreferrer"
						>
							github.com/cynwong
						</a>
					</div>
					<div className='contact blog'>
						<FontAwesomeIcon icon={faWordpress} title='Blog' />
						<span className="colon">:</span> 
						<a 
							href='https://cynw.wordpress.com'
							target='_blank'
							rel="noopener noreferrer"
						>
							cynw.wordpress.com
						</a>
					</div>

					<div id='contact-me'>
						<p>
							Have a question? Want to work together? or Simply wish to connect?
						</p>
						<a href='mailto:cynthiaswong88@gmail.com' className='btn btn-contact'>Contact Me</a>
					</div>
				</div>
			</section>
	)
}
