import React, { useContext } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faTimes } from '@fortawesome/free-solid-svg-icons';

import Tag from '../../Tag';

import AppContext from '../../../utils/AppContext';

import './styles.scss';

export default function ProjectDetail(props) {
	const { id } = props.match.params;
	const { portfolioData } = useContext(AppContext);
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
	const images = require.context('../../../images/projects', true);
	return (
		<section className="project-details">
			<div className='project-details-header'>
				<h2 className='project-details-header-title'>
					{name}
				</h2>
			</div>
			<div className='project-details-body'>
				<img 
					className='project-details-body-image' 
					src={images(imageUrl)}
					alt={imageCaption} 
				/>
				<p className='project-details-body-description'>
					{description}
				</p>
				<ul className='project-details-body-tag-cloud'>
					{
						[...mainTags, ...otherTags]
							.map((tag,index) => <Tag tag={tag} key={index} />)
					}
				</ul>
			</div>
			<div className='project-details-footer'>
				<a className='btn btn-site' href={deployedUrl} target='_blank'>
					<FontAwesomeIcon icon={faExternalLinkAlt} title='Deployed site' />
					<span className='tooltip right'>Visit site</span>
				</a>
				<a className='btn btn-github' href={githubUrl} target='_blank'>
					<FontAwesomeIcon icon={faGithub} title='GitHub' />
					<span className='tooltip left'>View code</span>
				</a>
				<span className='btn-close-project-details'>
					<FontAwesomeIcon icon={faTimes} title='Close' />
					Close
				</span>
			</div>
		</section>
	)
}
