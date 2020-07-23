import axios from 'axios';
import { GET_ITEMS } from './types';
import { DELETE_ITEM } from './types';

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

// delete item
export const deleteItem = (id) => async (dispatch) => {
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
