import React, { useState, useEffect } from 'react';
import './items.scss';

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
			<form onSubmit={handleOnSubmit}>
				<div className='form-group'>
					<label>Name</label>
					<input
						className='form-control'
						type='text'
						placeholder='Name'
						name='name'
						value={name}
						onChange={handleOnChange}
					/>
					<small id='nameHelp' className='form-text text-muted'>
						Enter new item name.
					</small>
				</div>

				<div className='form-group'>
					<label>Description</label>
					<input
						className='form-control'
						type='text'
						placeholder='Description'
						name='desc'
						value={desc}
						onChange={handleOnChange}
					/>
					<small
						id='descriptionHelp'
						className='form-text text-muted'
					>
						Enter new item description.
					</small>
				</div>
				<button type='submit' class='btn btn-primary btn-sm'>
					{isEditing ? 'Update' : 'Create'}
				</button>
			</form>
		</div>
	);
};

export default ItemsForm;
