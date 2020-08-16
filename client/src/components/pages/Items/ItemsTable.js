import React from 'react';
import PropTypes from 'prop-types';
import {
	MDBBtn,
	MDBTable,
	MDBTableHead,
	MDBTableBody,
	MDBIcon,
} from 'mdbreact';

const ItemsTable = ({ items, handleDelete, handleEdit }) => {
	return (
		<MDBTable small>
			<MDBTableHead>
				<tr>
					<th>Name</th>
					<th>Description</th>
					<th>Actions</th>
				</tr>
			</MDBTableHead>
			<MDBTableBody>
				{items.map((item) => {
					return (
						<tr key={item._id}>
							<td>{item.name}</td>
							<td>{item.desc}</td>
							<td>
								<MDBBtn
									onClick={() =>
										handleEdit(
											item._id,
											item.name,
											item.desc
										)
									}
									size='sm'
									color='warning'
									style={{ border: 'none' }}
								>
									<MDBIcon icon='edit' size='lg' />
								</MDBBtn>

								<MDBBtn
									onClick={() => handleDelete(item._id)}
									size='sm'
									color='danger'
									style={{
										border: 'none',
									}}
								>
									<MDBIcon icon='times-circle' size='lg' />
								</MDBBtn>
							</td>
						</tr>
					);
				})}
			</MDBTableBody>
		</MDBTable>
	);
};

ItemsTable.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleEdit: PropTypes.func.isRequired,
};

export default ItemsTable;
