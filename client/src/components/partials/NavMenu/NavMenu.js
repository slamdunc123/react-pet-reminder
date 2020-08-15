import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Brand from '../Brand/Brand';
import {
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarNav,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavItem,
	MDBNavLink,
} from 'mdbreact';

const NavMenu = () => {
	const [collapse, setCollapse] = useState(false);
	const [isWideEnough, setIsWideEnough] = useState(false);

	const handleOnClick = () => {
		setCollapse(!collapse);
	};
	return (
		<MDBNavbar
			color='bg-primary'
			fixed='top'
			dark
			expand='md'
			scrolling
			// transparent
		>
			<MDBNavbarBrand href='/'>
				<strong>Navbar</strong>
			</MDBNavbarBrand>
			{!isWideEnough && <MDBNavbarToggler onClick={handleOnClick} />}
			<MDBCollapse isOpen={collapse} navbar>
				<MDBNavbarNav left>
					<MDBNavItem active onClick={handleOnClick}>
						<MDBNavLink to='/'>Home</MDBNavLink>
					</MDBNavItem>
					<MDBNavItem onClick={handleOnClick}>
						<MDBNavLink to='/items'>Items</MDBNavLink>
					</MDBNavItem>
				</MDBNavbarNav>
			</MDBCollapse>
		</MDBNavbar>
	);
};

export default NavMenu;
