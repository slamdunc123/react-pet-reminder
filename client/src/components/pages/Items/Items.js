import React, { useState, useEffect } from 'react';
import Spinner from '../../partials/Spinner/Spinner';
import ItemsTable from './ItemsTable';
import ItemsForm from './ItemsForm';

import { useDispatch, useSelector } from 'react-redux';
import {
	getItems,
	createItem,
	deleteItem,
	updateItem,
} from '../../../redux/actions/itemsActions';

const Items = () => {
	const items = useSelector((state) => state.itemsReducer.items); //gets from rootReducer which has itemsReducer imported
	const loading = useSelector((state) => state.itemsReducer.loading); //gets from rootReducer which has itemsReducer imported
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const [editedItem, setEditedItem] = useState({
		id: '',
		name: '',
		desc: '',
	});
	const [updatedItem, setUpdatedItem] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleCreate = (formData) => {
		setShowModal(false);
		dispatch(createItem(formData));
		setIsEditing(false);
	};

	const handleAdd = () => {
		setShowModal(true);
	};

	const handleUpdate = (id, formData) => {
		console.log(formData);
		setShowModal(false);
		dispatch(updateItem(id, formData));
		setIsEditing(false);
		setUpdatedItem(true);
	};

	const handleEdit = (id, name, desc) => {
		console.log(id, name, desc);
		setShowModal(true);
		setIsEditing(true);
		setEditedItem({
			id: id,
			name: name,
			desc: desc,
		});
	};

	const handleDelete = (id) => {
		dispatch(deleteItem(id));
	};

	const getModal = () => {
		console.log('handleAdd fired');
		return (
			<div
				className='modal'
				tabindex='-1'
				role='dialog'
				style={{ display: 'block' }}
			>
				<div className='modal-dialog' role='document'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title'>
								{isEditing ? 'Edit Item' : 'Add Item'}
							</h5>
							<button
								type='button'
								className='close'
								data-dismiss='modal'
								aria-label='Close'
								onClick={() => setShowModal(false)}
							>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>
							<div className='col-12'>
								<ItemsForm
									isEditing={isEditing}
									editedItem={editedItem}
									handleCreate={handleCreate}
									handleUpdate={handleUpdate}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	useEffect(() => {
		dispatch(getItems());
		setUpdatedItem(false);
	}, [updatedItem, dispatch]);

	return (
		<div className='container'>
			{showModal ? getModal() : false}
			<h3>Items</h3>
			<div className='row'>
				<div className='col-12'>
					{loading ? (
						<Spinner />
					) : items.length > 0 ? (
						<ItemsTable
							items={items}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
							handleAdd={handleAdd}
						/>
					) : (
						'No items to display - please add one'
					)}
				</div>
			</div>
		</div>
	);
};

export default Items;
