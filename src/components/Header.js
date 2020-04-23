import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

function Header() {

  const location = useLocation();

  return (
    <Navbar expand={'md'} variant='dark' className='bodyfont' style={{backgroundColor: 'transparent'}}>
      <Container fluid>
        <Navbar.Brand className='linkHover' style={{ fontFamily: 'Rubik Mono One, sans-serif', color:'', textShadow: '2px 2px 10px #ffecc7' }} as={Link} to='/'>
          Lee Chenalloy
          </Navbar.Brand>
        {/* button for mobile nav */}
        <Navbar.Toggle aria-controls='navbar-nav' />
        <Navbar.Collapse id='navbar-nav'>
          <Nav navbar className='ml-auto'>
            <Nav.Link style={{ fontSize: 24 }} as={Link} to='/' className={location.pathname === '/' ? 'linkHover active' : 'linkHover'}>
              hi!
              </Nav.Link>
            <Nav.Link style={{ fontSize: 24 }} as={Link} to='/projects' className={location.pathname === '/projects' ? 'linkHover active' : 'linkHover'}>
              projects
              </Nav.Link>
            <Nav.Link style={{ fontSize: 24 }} as={Link} to='/about' className={location.pathname === '/about' ? 'linkHover active' : 'linkHover'}>
              about
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
