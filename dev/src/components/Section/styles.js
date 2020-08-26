import styled from 'styled-components';
import { rgba } from 'polished';

import {
	Colors,
	borderRadius
} from '../../utils/StyleConstants';

export const Section = styled.section`
	max-width: 90%;

	padding: 1rem 1.5rem;

	position: absolute;
    top: 20%;
    left: 5%;
	right: 5%;

	border-radius: ${borderRadius};

	overflow: hidden;
	
	background: ${rgba(Colors.blackPearl, 0.75)};

	cursor: default;
`;