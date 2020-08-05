import React from 'react';

import { Section } from './styles';

export default React.memo((props) => (
	<>
		<Section>
			{props.children}
		</Section>
	</>
));