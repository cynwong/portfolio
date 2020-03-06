import React from 'react';
import { NavLink } from 'react-router-dom';

export default function index() {
	return (
		<nav className='menu'>
			<ul>
				<li className='menu-item'>
					<NavLink className='menu-link' to='/'>Home</NavLink>
				</li>
				<li className='menu-item'>
					<NavLink className='menu-link' to='/about'>About Me</NavLink>
				</li>
				<li className='menu-item'>
					<NavLink className='menu-link' to='/portfolio'>Portfolio</NavLink>
				</li>
				<li className='menu-item'>
					<NavLink className='menu-link' to='/contact'>Contact Me</NavLink>
				</li>
			</ul>
		</nav>
	)
}
