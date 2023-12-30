import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import img from '../../images/Indialand Logo-03.png'
import { NavLink } from 'react-router-dom';
function Navbarr() {
  const logo = {
    width:'100px'
  }
  const nav = {
    backgroundColor: 'black',
    //  height:'19vh', 
     borderRadius:'13px'

  }


  return (
    <Navbar expand="lg" className="bg-body-tertiary"  bg="lg" style={nav}>
      <Container>
        <Navbar.Brand href="#home"><img src={img} alt="" style={logo}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {/* <Nav.Link href="about">About us</Nav.Link> */}
            <Nav.Link href="contact">contact us</Nav.Link>
            <NavDropdown title="About us" id="basic-nav-dropdown">
            <NavDropdown.Item href="about">About company</NavDropdown.Item>
            <NavDropdown.Item href="/leadership">LeaderShip</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3">Chairman Corner</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Projects" id="basic-nav-dropdown">
            <NavDropdown.Item href="/Magarpatta">CYBER CITY MAGARPATT</NavDropdown.Item>
            <NavDropdown.Item href="/INDIALAND GLOBAL INDUSTRIAL PARK">INDIALAND GLOBAL INDUSTRIAL PARK</NavDropdown.Item>
            <NavDropdown.Divider />
          </NavDropdown>

           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;