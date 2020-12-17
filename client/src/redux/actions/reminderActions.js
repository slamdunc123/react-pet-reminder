import axios from 'axios';
import { GET_REMINDERS } from './types';

// get reminders
export const getReminders = (id, petId) => async (dispatch) => {
	try {
		const res = await axios.get(`/api/reminders/${id}?petId=${petId}`);

		dispatch({
			type: GET_REMINDERS,
			payload: res.data,
		});
	} catch (err) {
		console.error(err.error);
	}
};
