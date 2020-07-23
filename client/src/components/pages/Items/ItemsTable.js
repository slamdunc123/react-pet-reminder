import React from 'react';
import PropTypes from 'prop-types';

const ItemsTable = ({ items, handleDelete }) => {
	return (
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
								<button>Edit</button>
							</td>
							<td>
								<button onClick={() => handleDelete(item._id)}>
									Delete
								</button>
							</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

ItemsTable.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemsTable;
