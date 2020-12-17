import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Reminders = () => {
	const [reminders, setReminders] = useState([]);
	// get pets
	// const getPets = () => async (dispatch) => {
	const getReminders = async () => {
		try {
			const res = await axios.get(`/api/reminders`);
			console.log(res);
			setReminders(res.data);

			// dispatch({
			// 	type: GET_PETS,
			// 	payload: res.data,
			// });
		} catch (err) {
			console.error(err.error);
		}
	};

	useEffect(() => {
		getReminders();
	}, []);

	return (
		<div>
			{reminders.map((item) => (
				<h5>{item.name}</h5>
			))}
		</div>
	);
};

export default Reminders;
