import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

export default function Contact() {
	return (
		<section className='contact'>
				<div className='section-content'>
					<div className='contact location'>
						<FontAwesomeIcon icon={faMapMarkerAlt} title='Location' />
						<span className="colon">:</span> 
						<a href='mailto:cynthiaswong88@gmail.com'>Melbourne, VIC, Australia</a>
					</div>
					<div className='contact email'>
						<FontAwesomeIcon icon={faEnvelope} title='Email' />
						<span className="colon">:</span> 
						<a href='mailto:cynthiaswong88@gmail.com'>cynthiaswong88@gmail.com</a>
					</div>
					<div className='contact linkedIn'>
						<FontAwesomeIcon icon={faLinkedin} title='LinkedIn' />
						<span className="colon">:</span> 
						<a href='https://www.linkedin.com/in/cynthia-wong-29944348/'>www.linkedin.com/in/cynthia-wong-29944348/</a>
					</div>
					<div className='contact github'>
						<FontAwesomeIcon icon={faGithub} title='GitHub' />
						<span className="colon">:</span> 
						<a href='https://github.com/cynwong'>github.com/cynwong</a>
					</div>
					<div className='contact blog'>
						<FontAwesomeIcon icon={faWordpress} title='Blog' />
						<span className="colon">:</span> 
						<a href='https://cynw.wordpress.com'>cynw.wordpress.com</a>
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
