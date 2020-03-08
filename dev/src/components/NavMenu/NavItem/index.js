import React from 'react';
import { NavLink } from 'react-router-dom';

// style
import './styles.scss';

export default function NavItem(props) {
	const { label, to } = props;
	return (
		<li className='menu-item'>
			<NavLink 
				className='menu-link'
				activeClassName='active'
				to={to}
			>
				{label}
			</NavLink>
		</li>
	)
};
