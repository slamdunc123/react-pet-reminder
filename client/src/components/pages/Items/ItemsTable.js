import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const ItemsTable = ({ items, handleDelete }) => {
	return (
		<div className='container'>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Description</th>
						<th>Edit</th>
						<th>Delete</th>
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
					})}
				</tbody>
			</table>
		</div>
	);
};

ItemsTable.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemsTable;
