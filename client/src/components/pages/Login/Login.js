import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/actions/authActions';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { initialValues, validationSchema } from './loginFormConfig';

const Login = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(
		(state) => state.authReducer.isAuthenticated
	);
	const history = useHistory();

	const handleOnSubmit = (fields) => {
		console.log('handleOnSubmit -> fields', fields);
		dispatch(login(fields.email, fields.password));
	};

	if (isAuthenticated) {
		history.push('/items');
	}

	return (
		<section className='container'>
			<h1>Login In</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(fields) => handleOnSubmit(fields)}
				render={({ errors, status, touched }) => (
					<Form>
						<div className='form-group'>
							<label htmlFor='email'>Email</label>
							<Field
								name='email'
								type='text'
								className={
									'form-control' +
									(errors.email && touched.email
										? ' is-invalid'
										: '')
								}
							/>
							<ErrorMessage
								name='email'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='password'>Password</label>
							<Field
								name='password'
								type='text'
								className={
									'form-control' +
									(errors.password && touched.password
										? ' is-invalid'
										: '')
								}
							/>
							<ErrorMessage
								name='password'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group'>
							<button
								type='submit'
								className='btn btn-primary mr-2'
							>
								Login
							</button>
							<button type='reset' className='btn btn-secondary'>
								Reset
							</button>
						</div>
					</Form>
				)}
			/>
		</section>
	);
};

export default Login;
