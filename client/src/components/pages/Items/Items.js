import React, { useState, useEffect } from 'react';
import Spinner from '../../partials/Spinner/Spinner';
import ItemsTable from './ItemsTable';
import ItemsForm from './ItemsForm';
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';

import { connect } from 'react-redux';
import {
	getItems,
	createItem,
	deleteItem,
	updateItem,
} from '../../../redux/actions/itemsActions';

import './items.scss';

const Items = ({
	getItems,
	createItem,
	deleteItem,
	updateItem,
	items,
	loading,
}) => {
	const container = { height: 1300 };
	const [isEditing, setIsEditing] = useState(false);
	const [editedItem, setEditedItem] = useState({
		id: '',
		name: '',
		desc: '',
	});
	const [updatedItem, setUpdatedItem] = useState(false);

	const handleCreate = (formData) => {
		createItem(formData);
	};

	const handleUpdate = (id, formData) => {
		updateItem(id, formData);
		setIsEditing(false);
		setUpdatedItem(true);
	};

	const handleDelete = (id) => {
		deleteItem(id);
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
		getItems();
		setUpdatedItem(false);
	}, [updatedItem]);
	return (
		<MDBContainer style={container} className='text-left mt-5 pt-5'>
			<MDBRow>
				<MDBCol md='6'>
					<ItemsForm
						isEditing={isEditing}
						editedItem={editedItem}
						handleCreate={handleCreate}
						handleUpdate={handleUpdate}
					/>
				</MDBCol>
				<MDBCol md='6'>
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
				</MDBCol>
			</MDBRow>
		</MDBContainer>
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
	updateItem,
})(Items);
