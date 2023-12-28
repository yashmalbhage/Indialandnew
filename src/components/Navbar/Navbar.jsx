import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from '../../images/logo (2).png'
import { NavLink } from 'react-router-dom';
function Navbarr() {
  const logo = {
    width:'10vw'
  }
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  bg="transparent"
  
    
    style={{ width: '85%', position: 'absolute', top:'2%', left:'7%',height:'14%', }}>
      <Container>
        <Navbar.Brand href="#home"><img src={img} alt="" style={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="about">About us</Nav.Link>
            <Nav.Link href="contact">contact us</Nav.Link>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;