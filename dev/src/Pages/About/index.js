import React, { useContext, useEffect } from 'react';

// import './styles.scss';

import AppContext from '../../utils/AppContext';

import {
	Section,
	Header,
	Paragraph
} from './styles';

export default function About() {
	const { mainRef } = useContext(AppContext);

	useEffect(() => {
		if (mainRef.current) {
			mainRef.current.scroll({top: 0, left: 0, behavior: 'smooth' });
		}
	}, [mainRef]);

	return (
		<Section>
			<Header>Who Am I?</Header>
			<Paragraph>
				{
					`Cynthia is a Full-stack Web Developer, based in Melbourne, Australia.`
				}
			</Paragraph>
			<Paragraph>
			{
				`Along many twists and turns of her career path, she picked up numerous soft skills such as research skills, teamwork, coaching, management, quick adaptability to new environment, working closely with others, multitasking among other things.  Although she enjoyed working in other fields, her passion has always been for the Technology.`
			}
			</Paragraph>
			<Paragraph>
			{
				`Since she returned back to the IT field, she fell in love with the coding all over again.  As a web developer, she loves utilizing her love for challenges, competitive spirit, insatiable intellectual curiosity, attention to details, and goal-oriented work-ethic to develop innovative and seamless applications.  She is looking forward to bringing her diverse arsenal of both technical and soft-skills to any development team to enhance their productivity.`
			}
			</Paragraph>
		</Section>
	)
}
