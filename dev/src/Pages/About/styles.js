
import styled from 'styled-components';
import { rgba } from 'polished';

import { Colors, pillCorner, borderRadius } from '../../Components/App/styles';

export const Section = styled.section`
	max-width: 90%;

	padding: 1rem 1.5rem;

	position: absolute;
    top: 20%;
    left: 5%;
	right: 5%;

	border-radius: ${borderRadius};
	
	background: ${rgba(Colors.blackPearl, 0.75)};
`;

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

export const Button = styled.button`
	&& {
		display: block;

		width: 9rem;
		margin: 3rem auto;
		padding: 1rem;

		border-radius: ${pillCorner};
		border: 1px solid ${Colors.snowDrift};
		
		color: ${Colors.snowDrift};
		text-align: center;

		transition: all 1s ease-in-out;
		
		&:hover, &:focus, &:active {
			background-color: ${Colors.frenchRose};

			border-color: ${Colors.frenchRose};

			transform: scale(1.2);
		}
	}
`;
