import React from 'react';

import './styles.scss';

export default function Tag(tag) {
	const { label, category } = tag.tag;
	
	return (
		<li data-tag-name={label} className={`tag ${category}`}>
			{label}
		</li>
	);
}
