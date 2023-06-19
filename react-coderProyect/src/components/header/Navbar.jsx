/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CartWidget from './CartWidget';
import './style.css';
import siteLogo from '/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = ({ logo, menuItem }) => {
    return (
        <header className="header">
            <Navbar bg="red" expand="lg" className="nav">
                <Container className="menu">
                    <Navbar.Brand href="/" className="logo"> <img src={siteLogo}{...logo} alt="Site Logo"></img>Front Stage Music Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                        <Nav.Link className="navLinks" href="#link">Home</Nav.Link>
                            <Nav.Link className="navLinks" href="#link">Contact</Nav.Link>
                            <NavDropdown className="navLinks" title="Products" id="basic-nav-dropdown">
                                <NavDropdown.Item id="dropdown-items" href="#action/3.1">Vynils</NavDropdown.Item>
                                <NavDropdown.Item id="dropdown-items" href="#action/3.2">Instruments</NavDropdown.Item>
                                <NavDropdown.Item id="dropdown-items" href="#action/3.3">CD's</NavDropdown.Item>
                            </NavDropdown>
                            <CartWidget />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}


export default Header;