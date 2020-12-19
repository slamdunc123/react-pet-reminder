import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Alert from '../components/partials/Alert/Alert';
import Pets from '../components/pages/Pets/Pets';
import Home from '../components/pages/Home/Home';
import Login from '../components/pages/Login/Login';
import Register from '../components/pages/Register/Register';
import PetProfile from '../components/pages/Pets/PetProfile';
import Reminders from '../components/pages/Reminders/Reminders';
import NotFound from '../components/pages/NotFound/NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = () => {
	return (
		<>
			<Alert />
			<Switch>
				<PrivateRoute component={Pets} path='/pets' exact />
				<PrivateRoute component={PetProfile} path='/pets/:id' exact />
				<PrivateRoute component={Reminders} path='/reminders/' exact />
				{/* <PrivateRoute component={Login} path='/login' exact />
				<PrivateRoute component={Register} path='/register' exact /> */}
				{/* <Route path='/pets'>
					<Pets />
				</Route> */}
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/login'>
					<Login />
				</Route>
				<Route path='/register'>
					<Register />
				</Route>
				<Route component={NotFound} />
			</Switch>
		</>
	);
};

export default Routes;
