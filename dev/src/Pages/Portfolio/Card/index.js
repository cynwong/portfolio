import React from 'react';
import { NavLink } from 'react-router-dom';

import Tag from '../../../Components/Tag';

import {
	Box,
	CardBox,
} from './styles';

export default function Card(props) {
	const {
		name,
		imageUrl,
		imageCaption,
		mainTags: tags,
		summary
	} = props.project;
	const images = require.context('../../../images/projects', true);
	return (
		<Box>
			<CardBox>
				<div className="card-front">
					<img 
						className='card-front-image' 
						src={images(imageUrl)}
						alt={imageCaption}
					/>
					<div className="card-front-title">{name}</div>
				</div>
				<div className='card-content'>
					<h5 className='card-content-title'>{name}</h5>
					<ul className='card-content-tags'>
						{tags.map((tag, index) => <Tag tag={tag} key={index}/>)}
					</ul>
					<p className='card-content-body'>{summary}</p>
					<NavLink 
						className='btn btn-more'
						to={`projects/${props.id}`}
					>
						Learn More &gt;
					</NavLink>
				</div>
			</CardBox>
		</Box>
	);
}
