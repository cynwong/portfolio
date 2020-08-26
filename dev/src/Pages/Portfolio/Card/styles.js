import styled from 'styled-components';
import { rgba } from 'polished';
import { NavLink } from 'react-router-dom';

import { 
	borderRadius,
	Colors,
	breakpoints,
} from '../../../utils/StyleConstants';

export const CardBox = styled.div`
	width: 100%;
	height: 100%;

	position: relative;

	transform-style: preserve-3d;
	transform-origin: center right;
	transition: all .5s ease-in-out;

	& > * {
		width: 100%;
		height: 100%;

		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
`;

export const Box = styled.div`
	height: 15rem;
	flex-basis: 350px;

	margin: 1rem auto;
	padding: 5px 10px;
	box-sizing: border-box;

	border-radius: ${borderRadius};

	perspective: 1000px;

	background: transparent;

	cursor: default;

	&:hover {
		${CardBox} {
			transform: translateX(-100%) rotateY(-180deg);
		}
	}

	@media all and (min-width: ${breakpoints.sm}){
		& {
			flex-basis: 45%;
		}
	}

	@media all and (min-width: ${breakpoints.md}){
		& {
			flex-basis: 30%;
		}
	}

	@media all and (min-width: ${breakpoints.lg}){
		& {
			flex-basis: 28%;
		}
	}
`;

export const CardFront = styled.div`
	object-fit: contain;

	background: ${Colors.blackPearl};
`;

export const CardImage = styled.img`
	width: 100%;
	height: 100%;

	margin-top: 5px;
	margin-left: auto;
	margin-right: auto;

	border-radius: ${borderRadius};

	display: block;
`;

const Title = `
	font-size: 1.5rem;
	font-weight:700;
	color: ${Colors.deepCerise};
	text-align: center;
`;
export const CardTitle = styled.h1`
	
	margin-bottom: 1rem;
	padding: 1rem 1.2rem;

	position: absolute;
	bottom: -1.5rem;
	right: 0;
	left: 0;

	border-bottom-left-radius: ${borderRadius};
	border-bottom-right-radius: ${borderRadius};
	
	${Title};

	background: ${rgba(Colors.smoky, 0.95)};

	@media all and (min-width: ${breakpoints.md}){
		& {
			bottom: -1.3rem;
		}
	}
`;

export const CardContent = styled.div`
	width: 90%;
	height: 89%;

	padding: 1rem 1.2rem;

	border-radius: ${borderRadius};

	display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

	background: ${Colors.snowDrift};

	transform: rotateY(180deg);
`;

export const CardContentTitle = styled.h5`
	margin: 0;

	${Title}
	font-size: 1.2rem;
`;

export const TagBox = styled.ul`
	margin: 1rem 0;
	padding: 0;

	display: flex;
	flex-flow: row wrap;
	justify-content: flex-start;
	align-items: flex-start;

	text-decoration: none;
	list-style: none;
`;

export const ContentBody = styled.p`
	width: 100%;
	margin-top: 1rem;
	margin-bottom: 2rem;

	font-size: 0.9rem;
	line-height: 1rem;
	color: ${Colors.blackPearl};
`;

export const MoreLink = styled(NavLink)`
	margin: 0.3rem 0.5rem;

	display: block;

	color: ${Colors.blackPearl};
	text-align: right;
	text-decoration: none;
	
	cursor: pointer;

	:hover, :focus, :active {
		color: ${Colors.deepCerise};
	}
`;