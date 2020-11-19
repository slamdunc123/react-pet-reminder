import axios from 'axios';
import { GET_ITEMS } from './types';
import { CREATE_ITEM } from './types';
import { DELETE_ITEM } from './types';
import { UPDATE_ITEM } from './types';
import { setAlert } from '../actions/alertActions';

// get items
export const getItems = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/items');

		dispatch({
			type: GET_ITEMS,
			payload: res.data,
		});
	} catch (err) {
		console.error(err.error);
	}
};

// create item
export const createItem = (formData) => async (dispatch) => {
	console.log('createItem fired', formData);
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = formData;

	try {
		const res = await axios.post('/api/items', body, config);

		dispatch({
			type: CREATE_ITEM,
			payload: res.data,
		});
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
	}
};

// delete item
export const deleteItem = (id) => async (dispatch) => {
	console.log('deleteItem fired', id);
	try {
		await axios.delete(`/api/items/${id}`);

		dispatch({
			type: DELETE_ITEM,
			payload: id,
		});
	} catch (err) {
		console.error(err.error);
	}
};

export const updateItem = (id, formData) => async (dispatch) => {
	console.log('udpateItem fired', id, formData);
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = formData;
	try {
		const res = await axios.put(`/api/items/${id}`, body, config); // pass edited item id, new formData, headers
		dispatch({
			type: UPDATE_ITEM,
			payload: res.data,
		});
	} catch (err) {
		console.error(err.error);
	}
};
