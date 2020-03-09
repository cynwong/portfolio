import React from 'react';
import { NavLink } from 'react-router-dom';

import Tag from '../Tag';

import './styles.scss';

export default function Card(props) {
	const {
		name,
		imageUrl,
		imageCaption,
		mainTags: tags,
		summary
	} = props.project;
	const images = require.context('../../images/projects', true);
	return (
		<div className='card-container'>
			<div className='card'>
				<div className="card-front">
					<img 
						className='card-front-image' 
						src={images(imageUrl)}
						// data-src={images(imageUrl)}
						// src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOMrgcAATsA3BT31OAAAAAASUVORK5CYII=" 
						alt={imageCaption}
					/>
					<div className="card-front-title">{name}</div>
				</div>
				<div className='card-content'>
					<h5 className='card-content-title'>{name}</h5>
					<ul className='card-content-tags'>
						{tags.map((tag) => <Tag tag={tag} />)}
					</ul>
					<p className='card-content-body'>{summary}</p>
					<NavLink 
						className='btn btn-more'
						to={`projects/${props.id}`}
					>
						Learn More &gt;
					</NavLink>
				</div>
			</div>
		</div>
	);
}
