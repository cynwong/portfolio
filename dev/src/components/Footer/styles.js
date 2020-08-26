import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Colors } from '../../utils/StyleConstants';

export const Box = styled.footer`
	min-height: 2rem;

	padding: 1rem 2rem 0.5rem 1rem;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;

	z-index: 999;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	position: relative;

	font-size: 0.85rem;
	color: ${Colors.snowDrift};

	background: ${Colors.blackPearl};
`;

export const Icon = styled(FontAwesomeIcon)`
	font-size: 2rem;
	text-decoration: none;
	color: ${Colors.celeste};

	transition: color 2s, transform .5s, opacity 5s;
`;

export const Link = styled.a`
	margin: 0 8px;

	border-radius: 5px;

	display: inline-block;

	opacity: 0.65;

	text-decoration: none;
	text-align: center;
	text-shadow: 0px 0px 2px ${Colors.paleSky};

	cursor: pointer;

	&:hover, &:active, &:focus {
		${Icon} {
			opacity: 1;

			color: ${Colors.deepCerise};

			transform: scale(1.35);
		}
	}
`;

export const Credit = styled.div`
	display: inline-block;

	position: absolute;
	right: 1.5rem;

	text-align: right;
	font-size: 0.7rem;
`;

export const Heart = styled.span`
	color: ${Colors.deepCerise};
`;