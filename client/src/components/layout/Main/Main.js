import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Items from '../../pages/Items/Items';

const Main = () => {
	return (
		<Switch>
			<Route exact path='/'>
				<Home />
			</Route>
			<Route path='/items'>
				<Items />
			</Route>
		</Switch>
	);
};

export default Main;
