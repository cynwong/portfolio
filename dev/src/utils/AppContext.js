import { createContext } from 'react'

const AppContext = createContext({
	isMobile: false,
	screenSize: 0,
	showMenu: false,
	portfolioData: {},
	onMenuButtonClick: () => undefined
});

export default AppContext;