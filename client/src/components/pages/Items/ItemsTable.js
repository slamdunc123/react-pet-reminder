import React from 'react';
import PropTypes from 'prop-types';

const ItemsTable = ({ items, handleAdd, handleRemove, handleEdit }) => {
	return (
		<div className='container'>
			<button className='btn btn-primary' onClick={handleAdd}>
				Add
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
										className='btn btn-sm mr-2'
									>
										<svg
											width='1em'
											height='1em'
											viewBox='0 0 16 16'
											className='bi bi-pencil-fill'
											fill='currentColor'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												d='M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z'
											/>
										</svg>
									</button>
									<button
										onClick={() => handleRemove(item._id)}
										type='button'
										className='btn btn-sm'
									>
										<svg
											width='1em'
											height='1em'
											viewBox='0 0 16 16'
											className='bi bi-x-circle-fill'
											fill='currentColor'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												fillRule='evenodd'
												d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z'
											/>
										</svg>
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
