import React, { useState, setState } from 'react';

import Card from '../../Card';

import './styles.scss';

import { PORTFOLIO_DATA } from '../../../data';



export default function Portfolio() {
	const [projects, setProjects] = useState(PORTFOLIO_DATA);
	return (
		<section className='portfolio'>
			<div className='projects-container'>
				{projects.map(project => <Card project={project} />)}
			</div>
		</section>
	)
}
