import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function MobileMenuButton({ setShowMenu, showMenu }) {
  return (
    <>
      <Modal show={showMenu} fullscreen={true} onHide={() => setShowMenu(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item action href="#Portfolio">
              Portfolio
            </ListGroup.Item>
            <ListGroup.Item action href="#About">
              About
            </ListGroup.Item>
            <ListGroup.Item action href="#Contact">
              Contact
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default MobileMenuButton;