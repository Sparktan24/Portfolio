import { useState } from "react";
import iconMail from "../assets/images/header/icon-mail.svg"
import menuButton from "../assets/Menu-button/Enabled.svg"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import MobileMenuButton from "./MobileMenuButton";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowMenu(true);
  }
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Jesus Molina</Navbar.Brand>
          <Nav>
            <img onClick={handleClick} src={menuButton} alt="A menu button"></img>
          </Nav>
        </Container>
      </Navbar>
      {showMenu && <MobileMenuButton setShowMenu={setShowMenu} showMenu={showMenu} />}
    </>
  )
}

export default NavBar;
