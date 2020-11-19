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
import { resetAlerts } from '../../../redux/actions/alertActions';
import Modal from '../../partials/Modal/Modal';

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
	const [modalTitle, setModalTitle] = useState('');
	const [itemId, setItemId] = useState();

	const handleCreate = (formData) => {
		setShowModal(false);
		setIsEditing(false);
		dispatch(createItem(formData));
	};

	const handleAdd = () => {
		setShowModal(true);
		setIsEditing(false);
		setModalTitle('add');
	};

	const handleUpdate = (id, formData) => {
		console.log(formData);
		setShowModal(false);
		setIsEditing(false);
		setUpdatedItem(true);
		dispatch(updateItem(id, formData));
	};

	const handleEdit = (id, name, desc) => {
		console.log(id, name, desc);
		setShowModal(true);
		setModalTitle('edit');
		setIsEditing(true);
		setEditedItem({
			id: id,
			name: name,
			desc: desc,
		});
	};

	const handleDelete = () => {
		setShowModal(false);
		dispatch(deleteItem(itemId));
	};

	const handleRemove = (id) => {
		setItemId(id);
		setShowModal(true);
		setModalTitle('delete');
	};

	const getModalBody = () => {
		return modalTitle === 'delete' ? (
			<>
				<h3>Are you sure?</h3>
				<hr />
				<button className='btn btn-danger' onClick={handleDelete}>
					Delete
				</button>
			</>
		) : (
			<ItemsForm
				isEditing={isEditing}
				editedItem={editedItem}
				handleCreate={handleCreate}
				handleUpdate={handleUpdate}
			/>
		);
	};

	const getModal = () => {
		return (
			<Modal
				title={modalTitle}
				body={getModalBody()}
				setShowModal={setShowModal}
			/>
		);
	};

	useEffect(() => {
		dispatch(resetAlerts());
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
							handleRemove={handleRemove}
							handleEdit={handleEdit}
							handleAdd={handleAdd}
						/>
					) : (
						<>
							<p>No items to display - please add one</p>

							<button
								className='btn btn-primary mr-2'
								onClick={handleAdd}
							>
								Add
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Items;
