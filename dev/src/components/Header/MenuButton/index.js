import React from 'react';

// style
import './styles.scss';

export default function MenuButton() {
	const handleOnClick = (e) => {
		e.preventDefault();
		console.log('button clicked.')

	};
	return (
		<div className='btn-menu' onClick={handleOnClick}>
			<span className='btn-menu-burger'></span>
		</div>
	)
}
