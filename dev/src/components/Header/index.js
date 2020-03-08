import React, { useContext } from 'react';

// components
import MenuButton from './MenuButton';
import NavMenu from './NavMenu';
import SiteTitle from './SiteTitle';

// utils
import ScreenWidthContext from '../../utils/ScreenWidthContext';

// style
import './styles.scss';

export default function Header() {
	const screenWidth = useContext(ScreenWidthContext);

	const content = (screenWidth >= 576) ? ( 
			<header className='header'>
				<SiteTitle /> 
				<NavMenu />
			</header>
		) : ( 
			<header className='header'>
				<MenuButton />
			</header>
		);
	return content;
};
