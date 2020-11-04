import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Items from '../../pages/Items/Items';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';

const Main = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route path='/items'>
				<Items />
			</Route>
			<Route path='/login'>
				<Login />
			</Route>
			<Route path='/register'>
				<Register />
			</Route>
		</Switch>
	);
};

export default Main;
