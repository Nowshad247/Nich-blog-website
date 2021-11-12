import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container'
import { Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../../Images/Logo.png';
import './Header.css';
import { AiOutlineLogin } from "react-icons/ai";
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand as={Link} to='/'>
                        <img src={logo} alt="" className='img-fluid logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/explore'>Explore</Nav.Link>


                        </Nav>
                        <Nav>
                            {
                                user?.email ? <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link> : ''

                            }
                            {
                                user?.email ? <button className="btn btn-success m-4" onClick={logout}>Log Out {user.displayName}</button> : <Nav.Link as={Link} to='/login' ><AiOutlineLogin />Login/Sign Up</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;