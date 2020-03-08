import React, { useState, useEffect }  from 'react';
import { 
	BrowserRouter as Router, 
	Route,
	Switch,
	Redirect
 } from 'react-router-dom';

// Component
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import Portfolio from './components/Pages/Portfolio';
import ProjectDetail from './components/Pages/ProjectDetail';

// util
import ScreenWidthContext from './utils/ScreenWidthContext';

// style
import './App.scss';

function App() {
	// get Screen width
	const isClient =  typeof window === 'object';
	const getWidth = () => isClient ? window.innerWidth : undefined;

	const [screenWidth, setScreenWidth] = useState(getWidth());

	useEffect(() => {
		if(!isClient) return false;
		const handleResize = () => setScreenWidth(getWidth());
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<Router>
			<ScreenWidthContext.Provider value={screenWidth}>
				<div className='wrapper'>
					<Header />
					<main>
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/about' component={About} />
							<Route exact path='/contact' component={Contact} />
							<Route exact path='/portfolio' component={Portfolio} />
							<Route path='/projects/:id' component={ProjectDetail} />
							<Route path='*'><Redirect to='/' /></Route>
						</Switch>
					</main>
					<Footer />
				</div>
			</ScreenWidthContext.Provider>
		</Router>
	);
}

export default App;
