import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../partials/Spinner/Spinner';
import ItemsTable from './ItemsTable';
import ItemsForm from './ItemsForm';

import { connect } from 'react-redux';
import { getItems, deleteItem } from '../../../redux/actions/itemsActions';

const Items = ({ getItems, deleteItem, items, loading }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleDelete = (id) => {
		console.log(id, 'delete clicked');
		deleteItem(id);
	};

	useEffect(() => {
		getItems();
		setIsSubmitting(false);
	}, [isSubmitting]);
	return (
		<div className='items-container'>
			{console.log(items)}
			<ItemsForm setIsSubmitting={setIsSubmitting} />
			<h3>Items</h3>
			{loading ? (
				<Spinner />
			) : items.length > 0 ? (
				<ItemsTable items={items} handleDelete={handleDelete} />
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

export default connect(mapStateToProps, { getItems, deleteItem })(Items);
