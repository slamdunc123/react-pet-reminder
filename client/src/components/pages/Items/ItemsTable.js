import React from 'react';
import PropTypes from 'prop-types';

const ItemsTable = ({ items, handleDelete, handleEdit }) => {
	return (
		<div className='container'>
			<table>
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
										className='btn btn-warning btn-sm'
									>
										Edit
									</button>
								</td>
								<td>
									<button
										onClick={() => handleDelete(item._id)}
										type='button'
										className='btn btn-danger btn-sm'
									>
										Delete
									</button>
								</td>
							</tr>
						);
					})}{' '}
				</tbody>
			</table>
		</div>
	);
};

ItemsTable.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleEdit: PropTypes.func.isRequired,
};

export default ItemsTable;
