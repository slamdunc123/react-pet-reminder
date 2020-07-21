import React from 'react';
import PropTypes from 'prop-types';

const ItemsTable = ({ items }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
				</tr>
			</thead>
			<tbody>
				{items.map((item) => {
					return (
						<tr key={item._id}>
							<td>{item.name}</td>
							<td>{item.desc}</td>
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
