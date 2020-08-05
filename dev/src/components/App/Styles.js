import styled, { createGlobalStyle } from 'styled-components';
import { rgba } from 'polished';

import image from '../../images/background.jpg';

export const Colors = {
	blackPearl: '#101217',
	smoky: '#636365',
	frenchRose: '#f141a0',
	snowDrift: '#e9e9e7',

	// border colors
	cinder: '#272c35',
	paleSky: '#59686f',
	
	// tag colors
	celeste: '#d7d7c3', // background
	verdunGreen: '#584f1b', //api
	tyrianPurple: '#680138', // js
	amazon: '#387058', // stylesheet
	goldenBrown: '#a15c17', // template-engine
	persianBlue: '#1c40d3', // frontend
	jewel: '#13660c', //testing
};

export const borderRadius = '10px';

export const pillCorner = '50px';

export const breakpoints = {
	xs: '350px',
	sm: '576px',
	md: '768px',
	lg: '992px',
	xl: '1200px'
}

export const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: 'Cedarville Cursive', cursive;
		src: url('https://fonts.googleapis.com/css?family=Cedarville+Cursive&display=swap');
	}

	@font-face {
		font-family: 'Roboto', sans-serif;
		src: url('https://fonts.googleapis.com/css?family=Anonymous+Pro|Roboto+Mono|Space+Mono&display=swap');
	}

	@font-face {
		font-family: 'Spicy Rice', cursive;
		src: url('https://fonts.googleapis.com/css?family=Spicy+Rice&display=swap');
	}

	:root {
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
		font-size: 16px;

		margin: 0;
	}

	@media (max-width: ${breakpoints.sm}) {
		:root {
			font-size: 13px;
		}
	}

	@media (max-width: ${breakpoints.xs}) {
		:root { 
			font-size: 10px;
		}
		
	}
`;


export const Wrapper = styled.div`
	--bgColor: ${Colors.blackPearl};

	width: 100vw;
	height: 100vh;

	display: flex;
	flex-flow: column;

	font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
	color: ${Colors.snowDrift};

	// background-color: transparent;
`;

export const Background = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	z-index: -9999;
	
	background: 
		linear-gradient(
			to right, 
			${rgba(Colors.blackPearl, 0.8)},
			${rgba(Colors.blackPearl, 0.2)}
		),
		url(${image}) 10% 5px;
	background-size: cover;
	background-repeat: no-repeat;
`;

export const Main = styled.main`
	flex-grow: 999;

	max-height: 1000px;
	overflow: scroll;

	padding-top: 6rem;
	padding-bottom: 6rem;

	//hide scrollbars
	-ms-overflow-style: none;
	scrollbar-width: none;  
	&::-webkit-scrollbar {
		display:none;
	}
`;


