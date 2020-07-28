import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';

const ItemsForm = ({ isEditing, editedItem, handleCreate, handleUpdate }) => {
	const [formData, setFormData] = useState({
		name: '',
		desc: '',
	});
	console.log(isEditing, editedItem);
	const { name, desc } = formData;

	const handleOnChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const handleOnSubmit = (e) => {
		e.preventDefault();
		isEditing
			? handleUpdate(editedItem.id, formData)
			: handleCreate(formData);

		setFormData({
			name: '',
			desc: '',
		});
	};

	useEffect(() => {
		setFormData({
			name: editedItem.name,
			desc: editedItem.desc,
		});
	}, [editedItem]);

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
					{isEditing ? 'Update' : 'Create'}
				</Button>
			</Form>
		</div>
	);
};

export default ItemsForm;
