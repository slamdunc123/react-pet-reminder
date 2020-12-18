import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { initialValues, validationSchema } from './remindersFormConfig';
import moment from 'moment';

const RemindersForm = ({
	isEditing,
	editedReminder,
	handleCreate,
	handleUpdate,
}) => {
	const { name, date } = editedReminder;

	const handleOnSubmit = (fields, { resetForm }) => {
		// console.log(imageFile.length);
		// console.log(((imageFile.length / 4) * 3) / 1064); // b64Length to KB
		// const b64Length = ((200 * 4) / 3) * 1064; // KB to b64Length
		// console.log(b64Length);
		const formData = fields;
		isEditing
			? handleUpdate(editedReminder.id, formData)
			: handleCreate(formData);
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
				initialValues={isEditing ? { name, date } : initialValues}
				validationSchema={validationSchema}
				onSubmit={handleOnSubmit}
			>
				{({ values, errors, status, touched }) => (
					<Form>
						{console.log(values)}
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
							<label htmlFor='date'>Date</label>
							<Field
								value={moment(values.date).format('yyyy-MM-DD')}
								name='date'
								type='date'
								className={
									'form-control' +
									(errors.date && touched.date
										? ' is-invalid'
										: '')
								}
							/>
							<ErrorMessage
								name='date'
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

export default RemindersForm;
