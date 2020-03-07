import React, { useEffect, useState } from 'react';

import MenuButton from './MenuButton';
import NavMenu from './NavMenu';
import SiteTitle from './SiteTitle';

// style
import './styles.scss';

export default function Header() {
	const isClient =  typeof window === 'object';
	const getWidth = () => isClient ? window.innerWidth : undefined;

	const [screenWidth, setScreenWidth] = useState(getWidth());

	useEffect(() => {
		if(!isClient) return false;
		const handleResize = () => setScreenWidth(getWidth());
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	console.log(screenWidth);
	const displaySiteTitle = () => {
		if (screenWidth >= 576) {
			return ( <SiteTitle /> );
		}
		return '';
	}
	return (
		<header className='header'>
			<MenuButton />
			{ displaySiteTitle() }
			<NavMenu />
		</header>
	);
};
