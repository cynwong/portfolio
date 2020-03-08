import React, { useState, setState } from 'react';

import './styles.scss';

import { PORTFOLIO_DATA } from '../../../data';


export default function Portfolio() {
	const [projects, setProjects] = useState(PORTFOLIO_DATA);
	return (
		<section className='portfolio'>
			<div className='projects-container'>
				Projects list
			</div>
		</section>
	)
}
