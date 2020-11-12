import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../../redux/actions/authActions';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { initialValues, validationSchema } from './registerFormConfig';

const Register = () => {
	const dispatch = useDispatch();
	const isAuthenticated = useSelector(
		(state) => state.authReducer.isAuthenticated
	);
	const history = useHistory();

	const handleOnSubmit = ({ name, email, password }) => {
		dispatch(register({ name, email, password }));
	};

	if (isAuthenticated) {
		history.push('/login');
	}

	return (
		<section className='container'>
			<h1>Register</h1>
			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={(fields) => handleOnSubmit(fields)}
			>
				{({ errors, status, touched }) => (
					<Form>
						<div className='form-group'>
							<label htmlFor='name'>Name</label>
							<Field
								name='name'
								type='text'
								className={
									'form-control' +
									(errors.name && touched.name
										? ' is-invalid'
										: '')
								}
							/>
							<ErrorMessage
								name='name'
								component='div'
								className='invalid-feedback'
							/>
						</div>
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
								Register
							</button>
							<button type='reset' className='btn btn-secondary'>
								Reset
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</section>
	);
};

export default Register;
