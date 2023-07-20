import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light" className='mb-5'>
        <Container>
          <Navbar.Brand href="#home">Tên công ty</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#introduction">Giới thiệu</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;