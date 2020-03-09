import React from 'react';
import { NavLink } from 'react-router-dom';


//style 
import './styles.scss';

export default function SiteTitle() {
	return (
		<div className='site-title'>
			<NavLink 
				to='/'
			>
				<h1>Cynthia Wong</h1>
			</NavLink>
			<p>Full-Stack Web Developer</p>
		</div>
	)
}
