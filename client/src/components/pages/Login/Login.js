import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/actions/authActions';
import { useHistory } from 'react-router-dom';
// import axios from 'axios';

const Login = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(
		(state) => state.authReducer.isAuthenticated
	);
	console.log('Login -> isAuthenticated', isAuthenticated);
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const history = useHistory();

	const { email, password } = formData;

	const handleOnChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		console.log(formData);
		// this can be used to save user to database if redux not being used
		// const newUser = {
		// 	email,
		// 	password,
		// };
		// try {
		// 	const config = {
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 	};
		// 	const body = JSON.stringify(newUser);
		// 	const res = await axios.post('/api/auth', body, config);
		// 	console.log(res.data);
		// } catch (err) {
		// 	console.error(err.response.data);
		// }
		dispatch(login(email, password));
		setFormData({
			email: '',
			password: '',
		});
	};

	if (isAuthenticated) {
		history.push('/items');
	}

	return (
		<section className='container'>
			<h1>Login In</h1>
			<form className='form' onSubmit={handleOnSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						className='form-control'
						id='email'
						type='text'
						placeholder='enter email address'
						name='email'
						value={email}
						onChange={handleOnChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						className='form-control'
						id='password'
						type='text'
						placeholder='enter password'
						name='password'
						value={password}
						onChange={handleOnChange}
					/>
				</div>
				<div className='form-group'>
					<input
						type='submit'
						className='btn btn-primary'
						name='password'
						value='Login'
					/>
				</div>
			</form>
		</section>
	);
};

export default Login;
