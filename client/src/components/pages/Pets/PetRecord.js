import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const PetRecord = ({ pet, handleEdit, handleRemove }) => {
	const alerts = useSelector((state) => state.alertReducer);
	const { _id, name, desc } = pet;

	return (
		<div className='card'>
			<img className='card-img-top' src='...' alt='image' />
			<div className='card-body'>
				<h5 className='card-title text-center'>{name}</h5>
				<p className='card-text'>{desc}</p>
				<div className='row justify-content-center'>
					<button
						onClick={() => handleEdit(_id, name, desc)}
						className='btn'
						disabled={alerts.length > 0}
					>
						<i className='fas fa-pencil-alt text-warning'></i>
					</button>
					<button
						onClick={() => handleRemove(_id)}
						className='btn'
						disabled={alerts.length > 0}
					>
						<i className='fas fa-trash text-danger'></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default PetRecord;
