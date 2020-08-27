import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBInput, MDBBtn, MDBRow, MDBCol } from 'mdbreact';
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
		<MDBContainer>
			<MDBRow>
				<MDBCol md='12'>
					<form onSubmit={handleOnSubmit}>
						<div className='grey-text'>
							<MDBInput
								label='Item name'
								type='text'
								validate
								error='wrong'
								p-4
								success='right'
								name='name'
								value={name}
								onChange={handleOnChange}
								icon='box-open'
							/>

							<MDBInput
								label='Item description'
								type='text'
								validate
								name='desc'
								value={desc}
								onChange={handleOnChange}
								icon='pen'
							/>
							<div className='round'>
								<MDBBtn
									type='submit'
									size='sm'
									border
									border-0
									color='primary'
									style={{ border: 'none' }}
								>
									{isEditing ? 'Update' : 'Create'}
								</MDBBtn>
							</div>
						</div>
					</form>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
};

export default ItemsForm;
