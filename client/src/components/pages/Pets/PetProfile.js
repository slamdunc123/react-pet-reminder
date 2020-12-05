import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const PetProfile = () => {
	const pets = useSelector((state) => state.petReducer.pets); //TODO: need to fix refesh issue where pets reverts back to an empty array
	const history = useHistory();
	const { location: pathname } = history;
	const pathUrl = pathname.pathname;

	const pathUrlLastItem = pathUrl.substring(pathUrl.lastIndexOf('/') + 1);

	const pet = pets.find((pet) => pet._id === pathUrlLastItem);

	const { _id, name, desc } = pet;
	return (
		<>
			<div>Pet Profile</div>
			<div className='card'>
				<div className='text-center'>
					<i className='fas fa-paw fa-3x text-primary'></i>
				</div>
				<div className='card-body'>
					<h5 className='card-title text-center'>{pet.name}</h5>
					<p className='card-text'>{pet.desc}</p>
					<div className='row justify-content-center'>
						{/* <button
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
						</button> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default PetProfile;
