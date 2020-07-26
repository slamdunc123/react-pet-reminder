import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavMenu = () => {
	return (
		<Navbar collapseOnSelect bg='primary' variant='dark' expand='lg'>
			<Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='ml-auto'>
					<Nav.Link as={Link} to='/' href='/'>
						Home
					</Nav.Link>
					<Nav.Link as={Link} to='/items' href='/items'>
						Items
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavMenu;
