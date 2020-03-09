import React from 'react';

import './styles.scss';

export default function InputText(props) {
	const { search, onSearchInputChange } = props;
	return (
		<input
			className='search-box'
			type='text'
			placeholder='Search...'
			value={search}
			onChange= {onSearchInputChange}
		/>
	)
}
