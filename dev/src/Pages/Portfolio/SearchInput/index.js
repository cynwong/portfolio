import React from 'react';

import { SearchBox } from './styles';

export default function InputText (props) {
	const { search, onSearchInputChange } = props;
	return (
		<SearchBox
			type='text'
			placeholder='Search...'
			value={search}
			onChange= {onSearchInputChange}
		/>
	)
}
