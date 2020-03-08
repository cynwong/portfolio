import React, { useContext } from 'react';

// component
import NavItem from './NavItem';

// utils
import AppContext from '../../utils/AppContext';

// style
import './styles.scss';

export default function NavMenu() {
	const { 
		openMenu,
	} = useContext(AppContext);
	return (
		<nav className={openMenu? 'menu open': 'menu'}>
			<ul>
				<NavItem label='About Me' to='/about' />
				<NavItem label='My Portfolio' to='/portfolio' />
				<NavItem label='Contact Me' to='/contact' />
			</ul>
		</nav>
	)
}
