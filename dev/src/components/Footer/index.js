import React from 'react';


import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

// style
import {
	Box, 
	Link,
	Icon,
	Credit,
	Heart
} from './styles';

export default function Footer() {
	return (
		<Box>
			<Link
				href= 'mailto:cynthiaswong88@gmail.com'
			>
				<Icon 
					icon={faEnvelope}
					title='Email me'
				/>
			</Link>
			<Link
				href= 'https://github.com/cynwong'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Icon 
					icon={faGithub}
					title='Github'
				/>
			</Link>
			<Link
				href= 'https://www.linkedin.com/in/cynthia-wong-29944348/'
				target='_blank'
				rel='noopener noreferrer'
			>
				<Icon 
					icon={faLinkedin}
					title='LinkedIn'
				/>
			</Link>
			<Credit>
				{`Made with `}
				<Heart>&hearts;</Heart>
				{`.`}
			</Credit>
			{/* <div className="credit">
				<p>Background photo credit: <a href="https://unsplash.com/@pankajpatel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pankaj Patel</a></p>
				<p>Made with &hearts;.</p>
			</div> */}
			
		</Box>
	)
}
