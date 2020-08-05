import React from 'react';

import {
	Container,
	A,
	Icon
} from './styles';

export const Link = React.memo((props) => (
	<>
		<Container>
			<Icon
				icon={props.icon}
				title={props.title}
			/>
			{`${props.title}:   `}
			<A
				href={props.href}
				target="_blank"
				rel="noopener noreferrer"
			>
				{props.text || props.href}
			</A>
		</Container>
	</>
));