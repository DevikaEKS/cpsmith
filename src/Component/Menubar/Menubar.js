import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoim from "../../Asset/Logo Black 2.png"
import "./Menubar.css";
function Menubar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary navbox py-3">
      <Container>
        <Navbar.Brand href="#home"><img src={logoim} className='logo'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link  className='navtext px-3'>HOME</Nav.Link>
            <Nav.Link href="/" className='navtext px-3'>WOMEN'S SPORTS WEAR</Nav.Link>
            <Nav.Link href="/" className='navtext px-3'>WOMEN'S LEGGINGS</Nav.Link>
          
            
          </Nav>
          <Nav className='ms-auto'>
          <Nav.Link href="#link" className='contactbutton px-3 rounded-1 navtext'>Sign In</Nav.Link>
          <Nav.Link href="#link" className='contactbutton px-3 rounded-1 navtext'>Create Account</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menubar;