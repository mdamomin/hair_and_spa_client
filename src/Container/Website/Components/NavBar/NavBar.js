import React, { useContext } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import { Authcontext } from '../../../../App';
import './NavBar.css';

const NavBar = () => {
  const { logout, user } = useContext(Authcontext);

  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      style={{ background: '#7A7B80' }}
      variant='dark'
    >
      <Container>
        <Navbar.Brand href='#home'>
          <img
            style={{ width: '35px' }}
            src='https://i.ibb.co/djfFcsN/1.png'
            alt=''
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink to='/home' className='nav-link'>
              Home
            </NavLink>
            <NavLink to='/service' className='nav-link'>
              Services
            </NavLink>
            <NavLink to='/packages' className='nav-link'>
              Packages
            </NavLink>
            <NavDropdown title='Products' id='collasible-nav-dropdown'>
              <NavDropdown.Item as={Link} to='/sarynaKey'>
                Saryna Key
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/kerastase'>
                Kerastase Products
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to='/hairTools'>
                Hair Tools
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to='/contact' className='nav-link'>
              Contact & Appointment
            </NavLink>
          </Nav>
          {user?.email || user?.displayName ? (
            <Nav>
              <button onClick={logout} className='nav-link btn'>
                Logout
              </button>
              <span className='nav-link'>
                SignIn as:{' '}
                <span className='text-white'>{user?.displayName}</span>
              </span>
              <span>
                <img
                  src={user?.photoURL}
                  style={{ width: '40px', borderRadius: '50%' }}
                  alt=''
                />
              </span>
            </Nav>
          ) : (
            <Nav>
              <NavLink to='/login' className='nav-link'>
                Login
              </NavLink>
              <NavLink to='/signUp' className='nav-link'>
                Sign Up
              </NavLink>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
