import React from 'react';
import { Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

const Header = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark" expand="sm">
                  <Container>
                  <NavbarBrand to="/home">LEARN-more</NavbarBrand>
             <Nav className="ms-auto ">
                 <NavLink className="custom-nav" to="/home">Home</NavLink>
                 <NavLink className="custom-nav" to="/services">Services</NavLink>
                 <NavLink className="custom-nav" to="/about">About</NavLink>
                 <NavLink className="custom-nav" to="/joinUs">Join Us</NavLink>
             </Nav>
                </Container>
           </Navbar>
        </div>
    );
};

export default Header;