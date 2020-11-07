import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Items from '../components/pages/Items/Items';
import Login from '../components/pages/Login/Login';
import Register from '../components/pages/Register/Register';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
	return (
		<>
			<Switch>
				<PrivateRoute component={Items} path='/items' exact />
				{/* <PrivateRoute component={Login} path='/login' exact />
				<PrivateRoute component={Register} path='/register' exact /> */}
				{/* <Route path='/items'>
					<Items />
				</Route> */}
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
			</Switch>
		</>
	);
};

export default Routes;
