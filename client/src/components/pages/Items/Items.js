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

	const handleCreate = (formData) => {
		dispatch(createItem(formData));
	};

	const handleUpdate = (id, formData) => {
		dispatch(updateItem(id, formData));
		setIsEditing(false);
		setUpdatedItem(true);
	};

	const handleDelete = (id) => {
		dispatch(deleteItem(id));
	};

	const handleEdit = (id, name, desc) => {
		console.log(id, name, desc);
		setIsEditing(true);
		setEditedItem({
			id: id,
			name: name,
			desc: desc,
		});
	};

	useEffect(() => {
		dispatch(getItems());
		setUpdatedItem(false);
	}, [updatedItem, dispatch]);

	return (
		<div className='container'>
			<h3>Items</h3>
			<div class='row'>
				<div className='col-12 col-md-6'>
					<ItemsForm
						isEditing={isEditing}
						editedItem={editedItem}
						handleCreate={handleCreate}
						handleUpdate={handleUpdate}
					/>
				</div>
				<div className='col-12 col-md-6'>
					{loading ? (
						<Spinner />
					) : items.length > 0 ? (
						<ItemsTable
							items={items}
							handleDelete={handleDelete}
							handleEdit={handleEdit}
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
