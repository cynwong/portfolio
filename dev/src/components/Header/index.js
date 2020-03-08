import React, { useContext } from 'react';

// components
import MenuButton from './MenuButton';
import NavMenu from '../NavMenu';
import SiteTitle from './SiteTitle';

// utils
import ScreenWidthContext from '../../utils/AppContext';

// style
import './styles.scss';

export default function Header() {
	const { 
		isMobile,
	} = useContext(ScreenWidthContext);
	

	const content = (isMobile) ? ( 
		<header className='header'>
			<MenuButton />
		</header>
		) : ( 
			<header className='header'>
				<SiteTitle /> 
				<NavMenu />
			</header>
		);
	return content;
};
