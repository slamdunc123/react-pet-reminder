import React, { useState, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { initialValues, validationSchema } from './petsFormConfig';
import moment from 'moment';
import FileBase from 'react-file-base64';
import './pets.scss';

const PetsForm = ({ isEditing, editedPet, handleCreate, handleUpdate }) => {
	const { name, desc, dob, age } = editedPet;
	const [imageFile, setImageFile] = useState();

	console.log(name, desc, dob, age);

	const getFormData = (fields) => {
		return { ...fields, imageFile };
	};

	const handleOnSubmit = (fields, { resetForm }) => {
		const formData = getFormData(fields);
		console.log(formData);
		isEditing
			? handleUpdate(editedPet.id, formData)
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
				initialValues={
					isEditing ? { name, desc, age, dob } : initialValues
				}
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
						<div className='form-group'>
							<label htmlFor='age'>Age</label>
							<Field
								value={values.age}
								name='age'
								type='text'
								className={
									'form-control' +
									(errors.age && touched.age
										? ' is-invalid'
										: '')
								}
							/>
							<ErrorMessage
								name='age'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group'>
							<label htmlFor='dob'>D-O-B</label>
							<Field
								value={moment(values.dob).format('yyyy-MM-DD')}
								name='dob'
								type='date'
								className={
									'form-control' +
									(errors.dob && touched.dob
										? ' is-invalid'
										: '')
								}
							/>
							<ErrorMessage
								name='dob'
								component='div'
								className='invalid-feedback'
							/>
						</div>
						<div className='form-group'>
							{/* <label htmlFor='imgFile'>D-O-B</label> */}
							{/* <Field
								value={moment(values.dob).format('yyyy-MM-DD')}
								name='imgFile'
								type='file'
								className={
									'form-control' +
									(errors.imgFile && touched.imgFile
										? ' is-invalid'
										: '')
								}
							/>
							<ErrorMessage
								name='imgFile'
								component='div'
								className='invalid-feedback'
							/> */}
							<div className='form-control'>
								<FileBase
									type='file'
									multiple={false}
									onDone={({ base64 }) =>
										setImageFile(base64)
									}
								/>
							</div>
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
