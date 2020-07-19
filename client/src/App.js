import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Main from './components/layout/Main/Main';
// import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<Router>
			<Header />
			<Main />
		</Router>
	);
}

export default App;
