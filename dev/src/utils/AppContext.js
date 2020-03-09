import { createContext } from 'react'

const AppContext = createContext({
	isMobile: false,
	showMenu: false,
	portfolioData: {},
	onMenuButtonClick: () => undefined
});

export default AppContext;