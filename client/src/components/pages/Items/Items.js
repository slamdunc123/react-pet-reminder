import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../partials/Spinner/Spinner';
import ItemsTable from './ItemsTable';
import ItemsForm from './ItemsForm';

import { connect } from 'react-redux';
import {
	getItems,
	createItem,
	deleteItem,
	editItem,
} from '../../../redux/actions/itemsActions';

const Items = ({
	getItems,
	createItem,
	deleteItem,
	editItem,
	items,
	loading,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [editedItem, setEditedItem] = useState({
		id: '',
		name: '',
		desc: '',
	});

	const handleCreate = (formData) => {
		createItem(formData);
	};

	const handleDelete = (id) => {
		deleteItem(id);
	};

	const handleEdit = (id, name, desc) => {
		console.log(id, name, desc);
		editItem(id, name, desc);
		setIsEditing(true);
		setEditedItem({
			id: id,
			name: name,
			desc: desc,
		});
	};

	useEffect(() => {
		getItems();
	}, []);
	return (
		<div className='container'>
			<h3>Items</h3>
			<ItemsForm
				isEditing={isEditing}
				editedItem={editedItem}
				handleCreate={handleCreate}
			/>
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
	);
};

const mapStateToProps = (state) => {
	return {
		items: state.itemsReducer.items, // gets from rootReducer which has itemsReducer imported
		loading: state.itemsReducer.loading, // gets from rootReducer which has itemsReducer imported
	};
};

export default connect(mapStateToProps, {
	getItems,
	createItem,
	deleteItem,
	editItem,
})(Items);
