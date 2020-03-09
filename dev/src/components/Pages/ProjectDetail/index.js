import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import Tag from '../../Tag';

import AppContext from '../../../utils/AppContext';

import './styles.scss';

export default function ProjectDetail(props) {
	const { id } = props.match.params;
	const { 
		portfolioData,
		mainRef
	} = useContext(AppContext);
	const {
		name, 
		imageUrl,
		imageCaption,
		githubUrl,
		deployedUrl,
		description,
		mainTags,
		otherTags,
	} = portfolioData[id];

	// load all images
	const images = require.context('../../../images/projects', true);

	// calculate indexes
	const keys = Object.keys(portfolioData);
	const currentIndex = keys.indexOf(id);
	const length = keys.length;
	const nextIndex = currentIndex < length - 1 ? currentIndex + 1 : 0;
	const nextKey = keys[nextIndex];
	const prevIndex = currentIndex <= 0 ? keys.length - 1 : currentIndex - 1;
	const prevKey = keys[prevIndex];
	
	const history = useHistory();

	useEffect(() => {
		if (mainRef.current) {
			mainRef.current.scrollIntoView({ behaviour: 'smooth'})
		}
	}, [id,mainRef]);

	return (
		<section className="project-details">
			<div 
				className="prevBtn" 
				onClick={()=> history.push(`/projects/${prevKey}`)}
			>
				&lt;
			</div>
			<div className="details-content">
				<div className='details-content-header'>
					<h2 className='details-content-header-title'>
						{name}
					</h2>
				</div>
				<div className='details-content-body'>
					<img 
						className='details-content-body-image' 
						src={images(imageUrl)}
						alt={imageCaption} 
					/>
					<p className='details-content-body-description'>
						{description}
					</p>
					<ul className='details-content-body-tag-cloud'>
						{
							[...mainTags, ...otherTags]
								.map((tag,index) => <Tag tag={tag} key={index} />)
						}
					</ul>
				</div>
				<div className='details-content-footer'>
					<a className='btn btn-site' href={deployedUrl} target='_blank' rel="noopener noreferrer">
						<FontAwesomeIcon icon={faExternalLinkAlt} title='Deployed site' />
						<span className='tooltip right'>Visit site</span>
					</a>
					<a className='btn btn-github' href={githubUrl} target='_blank' rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} title='GitHub' />
						<span className='tooltip left'>View code</span>
					</a>
				</div>
			</div>
			<div className="nextBtn" onClick={()=> history.push(`/projects/${nextKey}`)}>&gt;</div>
		</section>
	)
}
