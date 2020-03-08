import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Component
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/Pages/About';
import Home from './components/Pages/Home';

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
				</main>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
