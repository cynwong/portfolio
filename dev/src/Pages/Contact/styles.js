import styled from 'styled-components';

import {
	Colors,
	pillCorner
} from '../../utils/StyleConstants';

export const Box = styled.div`

	margin-top: 2.5rem;
	margin-bottom: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
`;

export const Button = styled.a`
&& {
	display: block;

	width: 9rem;
	margin: 1rem auto;
	padding: 1rem;

	border-radius: ${pillCorner};
	border: 1px solid ${Colors.snowDrift};
	
	color: ${Colors.snowDrift};
	text-align: center;
	text-decoration: none;

	transition: all 1s ease-in-out;
	
	&:hover, &:focus, &:active {
		background-color: ${Colors.frenchRose};

		border-color: ${Colors.frenchRose};

		transform: scale(1.2);
	}
}
`;