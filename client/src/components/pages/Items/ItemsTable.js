import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

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
									<Button
										onClick={() =>
											handleEdit(
												item._id,
												item.name,
												item.desc
											)
										}
										className='btn btn-warning'
										size='sm'
									>
										Edit
									</Button>
								</td>
								<td>
									<Button
										onClick={() => handleDelete(item._id)}
										className='btn btn-danger'
										size='sm'
									>
										Delete
									</Button>
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
