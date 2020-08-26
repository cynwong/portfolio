import styled from 'styled-components';

import { borderRadius } from '../../../utils/StyleConstants';

export const SearchBox = styled.input`
	width: 12rem;

	margin-right: 3rem;
	padding: 0.3rem 0.5rem;

	border-radius: ${borderRadius};

	display: block;

	&:focus{
		outline: none;
	}
`;