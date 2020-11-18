import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeAlert } from '../../../redux/actions/alertActions';

const Alert = () => {
	const alerts = useSelector((state) => state.alertReducer);
	const dispatch = useDispatch();
	const handleRemoveAlert = (id) => {
		dispatch(removeAlert(id));
	};
	console.log('Alert -> alerts', alerts);
	return (
		<>
			{
				// alert !== null &&
				alerts.length > 0
					? alerts.map((alert) => (
							<div
								key={alert.id}
								className={`container alert alert-${alert.alertType} alert-dismissible fade show`}
								role='alert'
							>
								{alert.msg}
								<button
									type='button'
									className='close'
									data-dismiss='alert'
									aria-label='Close'
									onClick={() => handleRemoveAlert(alert.id)}
								>
									<span aria-hidden='true'>&times;</span>
								</button>
							</div>
					  ))
					: false
			}
		</>
	);
};

export default Alert;
