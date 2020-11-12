import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
	const { isAuthenticated, user } = useSelector((state) => state.authReducer);
	return (
		<div className='container'>
			<h1>
				{isAuthenticated
					? `Welcome ${user && user.name}`
					: 'Please login or register'}
			</h1>
		</div>
	);
};

export default Home;
