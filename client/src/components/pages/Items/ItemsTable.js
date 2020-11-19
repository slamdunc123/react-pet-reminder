import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ItemsTable = ({ items, handleAdd, handleRemove, handleEdit }) => {
	const alerts = useSelector((state) => state.alertReducer);
	return (
		<div className='table-responsive'>
			<button
				className='btn'
				disabled={alerts.length > 0}
				onClick={handleAdd}
			>
				<i className='fas fa-plus-circle fa-lg text-success'></i>
			</button>
			<table className='table'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{items.map((item) => {
						return (
							<tr key={item._id}>
								<td>{item.name}</td>
								<td>{item.desc}</td>
								<td>
									<button
										onClick={() =>
											handleEdit(
												item._id,
												item.name,
												item.desc
											)
										}
										className='btn'
										disabled={alerts.length > 0}
									>
										<i className='fas fa-pencil-alt text-warning'></i>
									</button>
									<button
										onClick={() => handleRemove(item._id)}
										className='btn'
										disabled={alerts.length > 0}
									>
										<i className='fas fa-trash text-danger'></i>
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

ItemsTable.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	handleRemove: PropTypes.func.isRequired,
	handleEdit: PropTypes.func.isRequired,
};

export default ItemsTable;
