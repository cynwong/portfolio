import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Component
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import Home from './components/Pages/Home';
import Portfolio from './components/Pages/Portfolio';

// style
import './App.scss';



function App() {
	return (
		<Router>
			<div className='wrapper'>
				<Header />
				<main>
					<Route exact path='/' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/portfolio' component={Portfolio} />
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
