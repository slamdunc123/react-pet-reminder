import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../partials/Spinner/Spinner';
import ItemsTable from './ItemsTable';

const Items = () => {
	const [items, setItems] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		const fetchData = async () => {
			const result = await axios.get('api/items');
			setItems(result.data);
			setIsLoading(false);
		};
		fetchData();
	}, []);
	return (
		<div className='items-container'>
			<h3>Items</h3>
			{isLoading ? <Spinner /> : <ItemsTable items={items} />}
		</div>
	);
};

export default Items;
