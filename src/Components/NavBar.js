import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

import {useLogout} from '../Hooks/useLogout'

const NavBar = () => {

    const {logout} = useLogout()
    const handleClick = () => {
        logout()
    }

    return (
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">My App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something else here</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <button onClick={handleClick} className="btn btn-danger">
              Logout
            </button>
          </Navbar.Collapse>
        </Navbar>
      );
}

export default NavBar