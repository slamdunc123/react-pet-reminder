import axios from 'axios';
import { GET_ITEMS } from './types';

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
