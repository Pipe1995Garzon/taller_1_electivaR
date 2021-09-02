import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
const Navbar = ({text}) => {
  return (
    <div className='nav-container'>
     <Container>
        <Nav
          activeKey=""
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link href="/home">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Quienes somos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Productos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                Otros
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
    </div>
  )
};

export default Navbar;
