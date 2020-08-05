import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	Colors
} from '../../../Components/App/styles';

export const Container = styled.div`
	display: block;

	margin-bottom: 1rem;
`;

export const Icon = styled(FontAwesomeIcon)`
	display: inline-block;

	margin-right: 3px;

	font-size: 1.3rem;
	color: ${Colors.deepCerise};
`;

export const A = styled.a`
	display: inline-block;

	color: ${Colors.snowDrift};
	text-decoration: none;
	cursor: pointer;

	&:hover, &:active, &:focus {
		color: ${Colors.deepCerise};
	}
`;
