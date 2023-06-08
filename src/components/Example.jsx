import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function Example() {
  const [show, setShow] = useState(false);

  return (
    <>
      {
        <Button className="me-2 mb-2" onClick={() => setShow(true)}>
          Full screen
        </Button>
      }
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
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

export default Example;