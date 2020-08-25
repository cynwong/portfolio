import styled from 'styled-components';

// import { borderRadius } from '../../../utils/Themes';

export const Box = styled.div`
	// width: 100%;
	height: 15rem;
	flex-basis: 100%;

	margin: 1rem;
	padding: 5px 10px;
	box-sizing: border-box;

	border-radius: ${'10px'};

	perspective: 1000px;

	cursor: default;
`;

export const CardBox = styled.div`
	width: 100%;
	height: 100%;

	position: relative;

	transform-style: preserve-3d;
	transform-origin: center right;
	transition: all $duration ease-in-out;

	& > * {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
`;