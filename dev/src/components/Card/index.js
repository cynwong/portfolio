import React from 'react';

import './styles.scss';

export default function Card(props) {
	const {
		title,
		imageUrl,
		imageCaption,
		tags,
		body
	} = props;
	return (
		<div className='card-container'>
			<div className='card'>
				<div className="card-front">
					<img 
						className='card-front-image' 
						src={imageUrl ? imageUrl : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOMrgcAATsA3BT31OAAAAAASUVORK5CYII="} 
						alt={imageCaption}
					/>
					<div className="card-front-title">{title}</div>
				</div>
				<div className='card-content'>
					<h5 className='card-content-title'>{title}</h5>
					<ul className='card-content-tags'>
						{tags.map((tag) => <Tag label={tag} />)}
					</ul>
					<p className='card-content-body'>{body}</p>
					<a className='btn btn-more'>Learn More &gt;</a>
				</div>
			</div>
		</div>
	);
}
