import React, { useContext } from 'react';

// utils
import AppContext from '../../../utils/AppContext';

// style
import './styles.scss';

export default function MenuButton() {
	const { 
		openMenu,
		onMenuButtonClick
	} = useContext(AppContext);
	return (
		<div className='btn-menu' onClick={onMenuButtonClick}>
			<span className={openMenu? 'btn-menu-burger open': 'btn-menu-burger'}></span>
		</div>
	)
}
