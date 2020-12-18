import axios from 'axios';
import { GET_REMINDERS } from './types';
import { CREATE_REMINDER } from './types';
import { setAlert } from './alertActions';

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

// create reminder
export const createReminder = (formData, userId, petId) => async (dispatch) => {
	console.log('createReminder fired', formData, userId, petId);
	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const body = { ...formData, userId, petId };
	console.log(body);

	try {
		const res = await axios.post('/api/reminders', body, config);
		console.log(res.data.reminder);

		dispatch({
			type: CREATE_REMINDER,
			payload: res.data.reminder,
		});
		dispatch(setAlert(res.data.msg, 'success'));
	} catch (err) {
		const errors = err.response.data.errors;

		if (errors) {
			errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
		}
	}
};
