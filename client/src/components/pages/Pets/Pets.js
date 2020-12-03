import React, { useState, useEffect } from 'react';
import Spinner from '../../partials/Spinner/Spinner';
import PetsTable from './PetsTable';
import PetsForm from './PetsForm';

import { useDispatch, useSelector } from 'react-redux';
import {
	getPets,
	createPet,
	deletePet,
	updatePet,
} from '../../../redux/actions/petActions';
import { resetAlerts } from '../../../redux/actions/alertActions';
import Modal from '../../partials/Modal/Modal';

const Pets = () => {
	const { token, isAuthenticated, user } = useSelector(
		(state) => state.authReducer
	);

	const pets = useSelector((state) => state.petReducer.pets); //gets from rootReducer which has petReducer imported
	const loading = useSelector((state) => state.petReducer.loading); //gets from rootReducer which has petReducer imported
	const dispatch = useDispatch();
	const [isEditing, setIsEditing] = useState(false);
	const [editedPet, setEditedPet] = useState({
		id: '',
		name: '',
		desc: '',
	});
	const [updatedPet, setUpdatedPet] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [modalTitle, setModalTitle] = useState('');
	const [petId, setPetId] = useState();

	const getUserId = () => {
		let userId;
		if (user !== null) {
			userId = user._id;
		} else {
			userId = localStorage.getItem('userId');
		}
		return userId;
	};

	const handleCreate = (formData) => {
		setShowModal(false);
		setIsEditing(false);
		dispatch(createPet(formData, getUserId()));
	};

	const handleAdd = () => {
		setShowModal(true);
		setIsEditing(false);
		setModalTitle('add');
	};

	const handleUpdate = (id, formData) => {
		console.log(formData);
		setShowModal(false);
		setIsEditing(false);
		setUpdatedPet(true);
		dispatch(updatePet(id, formData));
	};

	const handleEdit = (id, name, desc) => {
		console.log(id, name, desc);
		setShowModal(true);
		setModalTitle('edit');
		setIsEditing(true);
		setEditedPet({
			id: id,
			name: name,
			desc: desc,
		});
	};

	const handleDelete = () => {
		setShowModal(false);
		dispatch(deletePet(petId));
	};

	const handleRemove = (id) => {
		setPetId(id);
		setShowModal(true);
		setModalTitle('delete');
	};

	const getModalBody = () => {
		return modalTitle === 'delete' ? (
			<>
				<h3>Are you sure?</h3>
				<hr />
				<button className='btn btn-danger' onClick={handleDelete}>
					Delete
				</button>
			</>
		) : (
			<PetsForm
				isEditing={isEditing}
				editedPet={editedPet}
				handleCreate={handleCreate}
				handleUpdate={handleUpdate}
			/>
		);
	};

	const getModal = () => {
		return (
			<Modal
				title={modalTitle}
				body={getModalBody()}
				setShowModal={setShowModal}
			/>
		);
	};

	useEffect(() => {
		dispatch(resetAlerts());
		dispatch(getPets(getUserId()));
		setUpdatedPet(false);
	}, [updatedPet, dispatch]);

	return (
		<div className='container'>
			{showModal ? getModal() : false}
			<h3>Pets</h3>
			<div className='row'>
				<div className='col-12'>
					{loading ? (
						<Spinner />
					) : pets.length > 0 ? (
						<PetsTable
							pets={pets}
							handleRemove={handleRemove}
							handleEdit={handleEdit}
							handleAdd={handleAdd}
						/>
					) : (
						<>
							<p>No pets to display - please add one</p>

							<button
								className='btn btn-primary mr-2'
								onClick={handleAdd}
							>
								Add
							</button>
						</>
					)}
				</div>
			</div>
		</div>
	);
};

export default Pets;
