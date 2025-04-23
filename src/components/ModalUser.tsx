import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';


interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
 
}

const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose,}) => {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica Profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formName">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>
          <Form.Group controlId="formSurname">
            <Form.Label>Cognome</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"  />
          </Form.Group>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="formBio">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea"  />
          </Form.Group>
          <Form.Group controlId="formTitle">
            <Form.Label>Titolo</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>
          <Form.Group controlId="formArea">
            <Form.Label>Area</Form.Label>
            <Form.Control type="text"  />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" >
          Annulla
        </Button>
        <Button variant="primary" >
          Salva
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditProfileModal;