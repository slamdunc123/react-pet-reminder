import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
	getReminders,
	// createPet,
	// deletePet,
	// updatePet,
} from '../../../redux/actions/reminderActions';

const Reminders = ({ location }) => {
	console.log(location);
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
		return location.petId;
	};

	useEffect(() => {
		dispatch(getReminders(getUserId(), getPetId()));
	}, []);

	return (
		<div className='container'>
			<div className='table-responsive'>
				<table className='table'>
					<thead>
						<tr>
							<th>Name</th>
							<th>Date</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{console.log(reminders)}
						{reminders.length > 0
							? reminders.map((item) => {
									return (
										<tr key={item._id}>
											<td>{item.name}</td>
											<td>{item.date}</td>
											<td>
												<button
													// onClick={() =>
													//     handleEdit(
													//         item._id,
													//         item.name,
													//         item.desc,
													//         item.age,
													//         item.dob
													//     )
													// }
													className='btn'
													// disabled={alerts.length > 0}
												>
													<i className='fas fa-pencil-alt text-warning'></i>
												</button>
												<button
													// onClick={() => handleRemove(item._id)}
													className='btn'
													// disabled={alerts.length > 0}
												>
													<i className='fas fa-trash text-danger'></i>
												</button>
											</td>
										</tr>
									);
							  })
							: 'No reminders for this pet'}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Reminders;
