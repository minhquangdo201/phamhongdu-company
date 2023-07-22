import React  from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();
  const handleProduct = () => {
    navigate('/product');
  }
  const handleOrigin = () => {
    navigate('/origin');

  }
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="#product" onClick={handleProduct}>Sản phẩm</Nav.Link>
            <Nav.Link href="#origin" onClick={handleOrigin}>Xuất xứ</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;