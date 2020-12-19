import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PetRecord = ({ pet }) => {
	const alerts = useSelector((state) => state.alertReducer);
	const { _id, name, desc, age, dob, imageFile } = pet;

	return (
		<div className='card'>
			<div className='text-center'>
				{imageFile ? (
					<img
						src={imageFile}
						alt=''
						className='rounded-circle'
						width='100'
						height='100'
					/>
				) : (
					<i className='fas fa-paw fa-5x text-primary'></i>
				)}
			</div>
			<div className='card-body'>
				<h5 className='card-title text-center'>{name}</h5>
				<p className='card-text'>{desc}</p>
				<div className='row justify-content-center'>
					<Link className='btn' title='profile' to={`/pets/${_id}`}>
						<i className='fas fa-book-open text-primary'></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PetRecord;
