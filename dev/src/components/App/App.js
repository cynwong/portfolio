import React, { useState, useEffect, useRef }  from 'react';
import { 
	BrowserRouter as Router, 
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';

// Component
import Footer from '../Footer';
import Header from '../Header';
import NavMenu from '../NavMenu';

// Pages
import About from '../../Pages/About';
import Contact from '../../Pages/Contact';
import Home from '../../Pages/Home';
import Portfolio from '../../Pages/Portfolio';
import ProjectDetail from '../../Pages/ProjectDetail';

// util
import AppContext from '../../utils/AppContext';

// style
import './App.scss';

// data 
import { PORTFOLIO_DATA } from '../../data';

function App() {
	// get Screen width
	const isClient =  typeof window === 'object';
	const getWidth = () => isClient ? window.innerWidth : undefined;

	const [screenWidth, setScreenWidth] = useState(getWidth());
	const [openMenu, setOpenMenu] = useState(false);
	const mainRef = useRef();

	const onMenuButtonClick = (e) => {
		e.preventDefault();
		setOpenMenu(!openMenu);
	}
	
	const appContext = {
		isMobile: (screenWidth < 576),
		openMenu,
		onMenuButtonClick, 
		portfolioData: PORTFOLIO_DATA,
		mainRef,
	}

	useEffect(() => {
		if(!isClient) return false;
		const handleResize = () => setScreenWidth(getWidth());
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	return (
		<Router>
			<AppContext.Provider value={appContext}>
				<div className='wrapper'>
					<Header />
					<main ref={mainRef}>
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
