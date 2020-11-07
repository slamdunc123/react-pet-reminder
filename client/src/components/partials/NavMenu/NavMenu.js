import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Brand from '../Brand/Brand';
import { useDispatch, useSelector } from 'react-redux';

const NavMenu = () => {
	const [collapse, setCollapse] = useState(false);

	const isAuthenticated = useSelector(
		(state) => state.authReducer.isAuthenticated
	);

	const handleOnClick = () => {
		setCollapse((prevCollapse) => !prevCollapse);
	};

	const getNavMenu = () => {
		if (isAuthenticated) {
			return (
				<>
					<Link
						className='nav-item nav-link'
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
					<Link
						className='nav-item nav-link'
						to='/logout'
						onClick={handleOnClick}
					>
						Logout
					</Link>
				</>
			);
		} else {
			return (
				<>
					<Link
						className='nav-item nav-link'
						to='/'
						onClick={handleOnClick}
					>
						Home
					</Link>
					<Link
						className='nav-item nav-link'
						to='/login'
						onClick={handleOnClick}
					>
						Login
					</Link>
					<Link
						className='nav-item nav-link'
						to='/register'
						onClick={handleOnClick}
					>
						Register
					</Link>
				</>
			);
		}
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
				<span className='navbar-toggler-icon'></span>
			</button>
			<div
				className={
					collapse
						? 'navbar-collapse collapse show'
						: 'navbar-collapse collapse'
				}
				id='navbarNavAltMarkup'
			>
				<div className='navbar-nav ml-auto'>{getNavMenu()}</div>
			</div>
		</nav>
	);
};

export default NavMenu;
