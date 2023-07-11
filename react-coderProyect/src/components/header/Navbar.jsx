/* eslint-disable react/no-unescaped-entities */
import React from "react";
import CartWidget from './CartWidget';
import '../header/Navbar.css';
import siteLogo from '/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




const Header = ({ logo }) => {
    return (
        <header className="header">
            <Navbar bg="red" expand="lg" className="nav">
                <Container className="menu">
                    <input type="checkbox" className="side-menu" id="side-menu" />
                    <label className="hamb" htmlFor ="side-menu">
                        <span className="hamb-line"></span>
                    </label>
                    <Navbar.Brand href="/" className="logo"> <img src={siteLogo}{...logo} alt="Site Logo"></img>Front Stage Music Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link className="navLinks" href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navLinks"  href="#">Contact</Nav.Link> 
                            </Nav.Item>
                            <NavDropdown className="navLinks" title="Products" id="basic-nav-dropdown">
                                <NavDropdown.Item id="dropdown-items" href="/vinyls">Vinyls</NavDropdown.Item>
                                <NavDropdown.Item id="dropdown-items" href="/instrumentCards">Instruments</NavDropdown.Item>
                                <NavDropdown.Item id="dropdown-items" href="/cds">CD's</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link className="navLinks" href="/about">About</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CartWidget />
            </Navbar>
        </header>
    )
}


export default Header;