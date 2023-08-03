/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import { Link, useNavigate } from "react-router-dom";
import carritoImagen from '/carrito.svg';
import './navbar.css';
import siteLogo from '/logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Header = ({ logo }) => {
    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    
    const goToCart = () => {
        navigate('/cart');
    }
    return (
        <header className="header">
            <Navbar bg="red" expand="lg" className="nav">
                <Container className="menu">
                    <input type="checkbox" className="side-menu" id="side-menu" />
                    <label className="hamb" htmlFor ="side-menu">
                        <span className="hamb-line"></span>
                    </label>
                    <Link to="/"><Navbar.Brand className="logo"> <img src={siteLogo}{...logo} alt="Site Logo"></img>Front Stage Music Store</Navbar.Brand></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Item>
                                <Nav.Link className="navLinks" href="/">Home</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="navLinks"href="/products">Products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link onClick={goToCart} className="navLinks menu-cart-container">
                                    <img className="menu-cart-image" src={carritoImagen} alt="Imagen carrito" />
                                    <div>
                                        <span className="menu-cart-count">{cart.length}</span>
                                    </div>
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}


export default Header;