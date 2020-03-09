import React, { useContext, useState } from 'react';

import Card from '../../Card';

import './styles.scss';

import AppContext from '../../../utils/AppContext';

export default function Portfolio() {
	const { portfolioData } = useContext(AppContext);
	const [projects, setProjects] = useState(portfolioData);
	return (
		<section className='portfolio'>
			<div className='projects-container'>
				{Object.entries(projects).map(([key, project]) => <Card project={project} id={key} key={key} />)}
			</div>
		</section>
	)
}
