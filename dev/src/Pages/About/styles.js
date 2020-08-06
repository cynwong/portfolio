
import styled from 'styled-components';

import { Colors } from '../../Components/App/styles';

export const Header = styled.h1`
	margin-bottom: 2rem;

	font-size: 2rem;
	color: ${Colors.deepCerise};
	text-shadow: 0px 0px 3px ${Colors.paleSky};
`;

export const Paragraph = styled.p`
	margin-bottom: 1rem;

	text-align: justify;
	line-height: 1.25;

	&:last-child {
		margin-bottom: 3rem;
	}
`;

