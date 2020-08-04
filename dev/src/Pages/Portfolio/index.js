import React, { useContext, useState, useEffect } from 'react';

import Card from '../../components/Card';
import SearchInput from './SearchInput';

import './styles.scss';

import AppContext from '../../utils/AppContext';

export default function Portfolio() {
	const { portfolioData, mainRef } = useContext(AppContext);

	const [search, setSearch] = useState('');

	// listen for search input key press event
	const onSearchInputChange = (event) => {
		setSearch(event.target.value);
	}

	useEffect(() => {
		if (mainRef.current) {
			mainRef.current.scroll({top: 0, left: 0, behavior: 'smooth' });
		}
	}, [mainRef]);

	let projects = portfolioData;

	// Filter
	if(search !== '') {
		const regSearch = new RegExp(search, 'gi');
		projects = Object.values(projects).filter((project) => {
			if(regSearch.test(project.name)) {
				return true;
			}
			const tags = [...project.mainTags, ...project.otherTags];
			for (const {label} of tags) {
				if(regSearch.test(label)){
					return true;
				}
			}
			return false;
		})
	} 

	return (
		<section className='portfolio'>
			<div className="search-container">
				<SearchInput search={search} onSearchInputChange={onSearchInputChange} />
			</div>
			<div className='projects-container'>
				{Object.entries(projects).map(([key, project]) => <Card project={project} id={key} key={key} />)}
			</div>
		</section>
	)
}
