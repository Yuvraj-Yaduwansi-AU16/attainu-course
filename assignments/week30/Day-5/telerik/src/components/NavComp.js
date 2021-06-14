import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import React from 'react';

function NavComp() {
  const NavLinks = [
    'Enterprise',
    'Free Trials',
    'Pricing',
    'Support&Learning',
    'About Us',
    'Link',
    'Your Account',
    'telerik platform',
  ];
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <Navbar.Brand href='#' className='mx-5'>
            Telerik
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto' style={{ marginLeft: '250px' }}>
              <NavDropdown title='Products' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              {NavLinks.map((links) => (
                <Nav.Link href='#' style={{ marginLeft: '5px' }}>
                  {links}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavComp;
