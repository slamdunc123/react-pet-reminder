import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

const ItemsForm = ({ handleCreate }) => {
	const [formData, setFormData] = useState({
		name: '',
		desc: '',
	});

	const { name, desc } = formData;

	const handleOnChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();

		handleCreate(formData);

		setFormData({
			name: '',
			desc: '',
		});
	};

	return (
		<div className='container'>
			<Form onSubmit={handleOnSubmit}>
				<Form.Group controlId='itemName'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						type='text'
						placeholder='Name'
						name='name'
						value={name}
						onChange={handleOnChange}
					/>
					<Form.Text className='text-muted'>
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group controlId='itemDesc'>
					<Form.Label>Password</Form.Label>
					<Form.Control
						type='text'
						placeholder='Description'
						name='desc'
						value={desc}
						onChange={handleOnChange}
					/>
				</Form.Group>
				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default ItemsForm;
