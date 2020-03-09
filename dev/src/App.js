import React, { useState, useEffect }  from 'react';
import { 
	BrowserRouter as Router, 
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

// Component
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import NavMenu from './components/NavMenu';
import Portfolio from './components/Pages/Portfolio';
import ProjectDetail from './components/Pages/ProjectDetail';

// util
import AppContext from './utils/AppContext';

// style
import './App.scss';

// data 
import { PORTFOLIO_DATA } from './data';

function App() {
	// get Screen width
	const isClient =  typeof window === 'object';
	const getWidth = () => isClient ? window.innerWidth : undefined;

	const [screenWidth, setScreenWidth] = useState(getWidth());
	const [openMenu, setOpenMenu] = useState(false);

	const onMenuButtonClick = (e) => {
		e.preventDefault();
		setOpenMenu(!openMenu);
	}
	
	const appContext = {
		screenSize: screenWidth,
		isMobile: (screenWidth < 576),
		openMenu,
		onMenuButtonClick, 
		portfolioData: PORTFOLIO_DATA,
	}

	useEffect(() => {
		if(!isClient) return false;
		const handleResize = () => setScreenWidth(getWidth());
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<Router>
			<AppContext.Provider value={appContext}>
				<div className='wrapper'>
					<Header />
					<main>
						{appContext.isMobile && <NavMenu />}
						{!openMenu && (
							<Switch>
								<Route exact path='/' component={Home} />
								<Route exact path='/about' component={About} />
								<Route exact path='/contact' component={Contact} />
								<Route exact path='/portfolio' component={Portfolio} />
								<Route path='/projects/:id' component={ProjectDetail} />
								<Route path='*'><Redirect to='/' /></Route>
							</Switch>
						)}
					</main>
					<Footer />
				</div>
			</AppContext.Provider>
		</Router>
	);
}

export default App;
