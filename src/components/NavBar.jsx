import iconMail from "../assets/images/header/icon-mail.svg"
import menuButton from "../assets/Menu-button/Enabled.svg"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Jesus Molina</Navbar.Brand>
          <Nav>
            <img src={menuButton} alt="A menu button"></img>
            {/*  <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavBar;
