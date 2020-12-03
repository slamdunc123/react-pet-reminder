import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { initialValues, validationSchema } from './petsFormConfig';
import './pets.scss';

const PetsForm = ({ isEditing, editedPet, handleCreate, handleUpdate }) => {
	const { name, desc } = editedPet;

	const handleOnSubmit = (fields, { resetForm }) => {
		isEditing ? handleUpdate(editedPet.id, fields) : handleCreate(fields);
		resetForm(initialValues);
	};

	return (
		<div className='container'>
			{console.log(isEditing)}
			{console.log(initialValues)}
			<Formik
				enableReinitialize
				validateOnChange={false}
				validateOnBlur={false}
				initialValues={isEditing ? { name, desc } : initialValues}
				validationSchema={validationSchema}
				onSubmit={handleOnSubmit}
			>
				{({ values, errors, status, touched }) => (
					<Form>
						<div className='form-group'>
							<label htmlFor='name'>Name</label>
							<Field
								value={values.name}
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
							<label htmlFor='desc'>Description</label>
							<Field
								value={values.desc}
								name='desc'
								type='text'
								className={
									'form-control' +
									(errors.desc && touched.desc
										? ' is-invalid'
										: '')
								}
							/>
							<ErrorMessage
								name='desc'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<hr />
						<div className='form-group'>
							<button
								type='submit'
								className='btn btn-primary mr-2'
							>
								{isEditing ? 'Update' : 'Add'}
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default PetsForm;
