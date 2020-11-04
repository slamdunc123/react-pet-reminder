import React, { useState } from 'react';

const Login = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const handleOnChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleOnSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		setFormData({
			email: '',
			password: '',
		});
	};
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
