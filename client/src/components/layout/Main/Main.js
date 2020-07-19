import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Items from '../../pages/Items/Items';

const Main = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/items' component={Items} />
		</Switch>
	);
};

export default Main;
