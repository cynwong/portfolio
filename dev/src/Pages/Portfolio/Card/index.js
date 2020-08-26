import React from 'react';


import Tag from '../../../Components/Tag';

import {
	Box,
	CardBox,
	CardFront,
	CardImage,
	CardTitle,
	CardContent,
	CardContentTitle,
	TagBox,
	ContentBody,
	MoreLink
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
				<CardFront>
					<CardImage 
						className='card-front-image' 
						src={images(imageUrl)}
						alt={imageCaption}
					/>
					<CardTitle>{name}</CardTitle>
				</CardFront>
				<CardContent>
					<CardContentTitle>{name}</CardContentTitle>
					<TagBox>
						{
							tags.map((tag, index) => (
								<Tag 
									tag={tag}
									key={index}
								/>
							))
						}
					</TagBox>
					<ContentBody>
						{summary}
						<MoreLink 
							to={`projects/${props.id}`}
						>
							Learn More &gt;
						</MoreLink>
					</ContentBody>
				</CardContent>
			</CardBox>
		</Box>
	);
}
