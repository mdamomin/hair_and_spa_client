import React from 'react';
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = () => {
  const Name = 'Momin';
  return (
    <Navbar bg='light' expand={false}>
      <Container fluid>
        <Navbar.Toggle aria-controls='offcanvasNavbar' />

        <div className='d-flex'>
          <div className='me-2'>
            <div className='input-group'>
              <input
                type='search'
                placeholder='Search'
                id='form1'
                className='form-control search_box'
              />
              <i className='bi bi-search search_icon'></i>
            </div>
          </div>

          <Navbar.Text className='d-flex align-items-center p-0'>
            Signed in as:
            <NavDropdown
              title={Name}
              id='offcanvasNavbarDropdown'
              className='border-0'
            >
              <NavDropdown.Item as={Link} to='/admin/productsadd/sarynaKeyAdd'>
                Saryna Key
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/admin/productsadd/kerastaseAdd'>
                Kerastase
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/admin/productsadd/hairToolsAdd'>
                Hair Tools
              </NavDropdown.Item>
            </NavDropdown>
          </Navbar.Text>
        </div>

        <Navbar.Offcanvas
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
          placement='start'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id='offcanvasNavbarLabel'>
              HAIR AND SPA ADMIN
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className='justify-content-end flex-grow-1 pe-3'>
              <Nav.Link as={Link} to='/admin/packages'>
                Packages
              </Nav.Link>
              <Nav.Link as={Link} to='/admin/serviceadd'>
                Services
              </Nav.Link>
              <NavDropdown title='Products' id='offcanvasNavbarDropdown'>
                <NavDropdown.Item
                  as={Link}
                  to='/admin/productsadd/sarynaKeyAdd'
                >
                  Saryna Key
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to='/admin/productsadd/kerastaseAdd'
                >
                  Kerastase
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to='/admin/productsadd/hairToolsAdd'
                >
                  Hair Tools
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Sidebar;
