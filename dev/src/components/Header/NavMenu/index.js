import React from 'react';

// component
import NavItem from './NavItem';

// style
import './styles.scss';

export default function index() {
	return (
		<nav className='menu'>
			<ul>
				<NavItem label='Home' to='/' />
				<NavItem label='About Me' to='/about' />
				<NavItem label='My Portfolio' to='/portfolio' />
				<NavItem label='Contact Me' to='/contact' />
			</ul>
		</nav>
	)
}
