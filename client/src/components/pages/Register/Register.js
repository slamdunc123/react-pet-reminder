import React, { useState } from 'react';

const Register = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
	});

	const { name, email, password } = formData;

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
			name: '',
			email: '',
			password: '',
		});
	};

	return (
		<section className='container'>
			<h1>Register</h1>
			<form className='form' onSubmit={handleOnSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Name</label>
					<input
						className='form-control'
						id='name'
						type='text'
						placeholder='enter name'
						name='name'
						value={name}
						onChange={handleOnChange}
					/>
				</div>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						className='form-control'
						id='email'
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
						placeholder='enter password'
						name='password'
						value={password}
						onChange={handleOnChange}
					/>
				</div>
				<div className='form-group'>
					<input
						className='form-control'
						type='submit'
						className='btn btn-primary'
						name='register'
						value='Login'
					/>
				</div>
			</form>
		</section>
	);
};

export default Register;
