import { createContext } from 'react'

const AppContext = createContext({
	isMobile: false,
	showMenu: false,
	onMenuButtonClick: () => undefined
});

export default AppContext;