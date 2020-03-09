import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faWordpress, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

// style
import './styles.scss';

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='social-icons'>
				<a href='mailto:cynthiaswong88@gmail.com'>
					<FontAwesomeIcon icon={faEnvelope} size='2x' title='Email me' />
				</a>
				<a href='https://github.com/cynwong' target='_blank' rel="noopener noreferrer">
					<FontAwesomeIcon icon={faGithub} size='2x' title='Github' />
				</a>
				<a href='https://cynw.wordpress.com' target='_blank' rel="noopener noreferrer">
					<FontAwesomeIcon icon={faWordpress} size='2x' title='Github' />
				</a>
				<a href='https://www.linkedin.com/in/cynthia-wong-29944348/' target='_blank' rel="noopener noreferrer">
					<FontAwesomeIcon icon={faLinkedin} size='2x' title='Github' />
				</a>
			</div>
			<div className="credit">
				<p>Background photo credit: <a href="https://unsplash.com/@pankajpatel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pankaj Patel</a></p>
				<p>Made with &hearts;.</p>
			</div>
			
		</footer>
	)
}
