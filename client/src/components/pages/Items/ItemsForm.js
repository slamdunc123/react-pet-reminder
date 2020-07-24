import React, { useState } from 'react';

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
		<div className='items-form-container'>
			<h5>Items Form</h5>
			<form onSubmit={handleOnSubmit}>
				<input
					type='text'
					name='name'
					value={name}
					placeholder='Item Name'
					onChange={handleOnChange}
				/>
				<input
					type='text'
					name='desc'
					value={desc}
					placeholder='Item Description'
					onChange={handleOnChange}
				/>
				<input type='submit' value='submit' />
			</form>
		</div>
	);
};

export default ItemsForm;
