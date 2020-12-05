import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PetRecord = ({ pet, handleEdit, handleRemove }) => {
	const alerts = useSelector((state) => state.alertReducer);
	const { _id, name, desc } = pet;

	return (
		<div className='card'>
			<div className='text-center'>
				<i className='fas fa-paw fa-3x text-primary'></i>
			</div>
			<div className='card-body'>
				<h5 className='card-title text-center'>{name}</h5>
				<p className='card-text'>{desc}</p>
				<div className='row justify-content-center'>
					<Link className='badge badge-primary' to={`/pets/${_id}`}>
						Profile
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PetRecord;
