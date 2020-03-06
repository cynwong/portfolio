import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Pages/Home';

function App() {
  return (
	<Router>
		<Header />
		<main>
			<Route exact path='/' component={Home} />
		</main>
	</Router>
  );
}

export default App;
