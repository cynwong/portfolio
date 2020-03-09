import React, { useContext, useState, useEffect } from 'react';

import Card from '../../Card';

import './styles.scss';

import AppContext from '../../../utils/AppContext';

export default function Portfolio() {
	const { portfolioData, mainRef } = useContext(AppContext);
	const [projects, setProjects] = useState(portfolioData);

	useEffect(() => {
		if (mainRef.current) {
			mainRef.current.scrollIntoView({ behaviour: 'smooth'})
		}
	}, [mainRef]);

	return (
		<section className='portfolio'>
			<div className='projects-container'>
				{Object.entries(projects).map(([key, project]) => <Card project={project} id={key} key={key} />)}
			</div>
		</section>
	)
}
