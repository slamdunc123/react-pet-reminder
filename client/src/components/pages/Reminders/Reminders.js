import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	getReminders,
	// createPet,
	// deletePet,
	// updatePet,
} from '../../../redux/actions/reminderActions';

const Reminders = () => {
	const { token, isAuthenticated, user } = useSelector(
		(state) => state.authReducer
	);
	const reminders = useSelector((state) => state.reminderReducer.reminders); //gets from rootReducer which has reminderReducer imported
	const loading = useSelector((state) => state.reminderReducer.loading); //gets from rootReducer which has reminderReducer imported

	const dispatch = useDispatch();

	const getUserId = () => {
		console.log(user);
		let userId;
		if (user !== null) {
			userId = user._id;
		} else {
			userId = localStorage.getItem('userId');
		}
		return userId;
	};
	// console.log(user._id);

	const getPetId = () => {
		return localStorage.getItem('petId');
	};

	useEffect(() => {
		dispatch(getReminders(getUserId(), getPetId()));
	}, []);

	return (
		<div>
			{console.log(reminders)}
			{reminders.length > 0
				? reminders.map((item) => <h5>{item.name}</h5>)
				: 'No reminders for this pet'}
		</div>
	);
};

export default Reminders;
