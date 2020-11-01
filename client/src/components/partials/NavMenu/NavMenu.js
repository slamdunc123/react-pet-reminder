import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Brand from '../Brand/Brand';

const NavMenu = () => {
	const [collapse, setCollapse] = useState(false);

	const handleOnClick = () => {
		setCollapse((prevCollapse) => !prevCollapse);
	};
	return (
		<nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
			<a className='navbar-brand' href='#'>
				<Brand />
			</a>
			<button
				className={
					collapse ? 'navbar-toggler collapsed' : 'navbar-toggler'
				}
				type='button'
				onClick={handleOnClick}
			>
				<span class='navbar-toggler-icon'></span>
			</button>
			<div
				className={
					collapse
						? 'navbar-collapse collapse show'
						: 'navbar-collapse collapse'
				}
				id='navbarNavAltMarkup'
			>
				<div className='navbar-nav ml-auto'>
					<Link
						className='nav-item nav-link active'
						to='/'
						onClick={handleOnClick}
					>
						Home
					</Link>
					<Link
						className='nav-item nav-link'
						to='/items'
						onClick={handleOnClick}
					>
						Items
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default NavMenu;
