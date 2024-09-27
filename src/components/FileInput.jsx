import React from "react";
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

import './FileInput.css';
import { atualizarFotos } from "../services/userService";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function FormFileInput() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleOnChangeFile = async (event) => {
    if (event.target.files && event.target.files[0]) {
      const url = URL.createObjectURL(event.target.files[0]);
      const name = event.target.files[0].name
      await atualizarFotos(url, name);
      window.location.reload();
    }
  };

  return (
    <div className='edit-foto-form'>
      <Button variant="owl-primary" onClick={handleShow}>
        <FontAwesomeIcon icon={faPenToSquare}/>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Selecionar nova foto de perfi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modalEdit">
            <Form.Control type="file" onChange={handleOnChangeFile} />
              <Button className="trash-btn">
                <FontAwesomeIcon className="trash" icon={faTrashCan} />
              </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    // <>
    //   <Form.Group controlId="formFile" className="mb-3">
    //     <Form.Label>Selecionar nova foto de perfil</Form.Label>
    //     <div className="testando">
    //       <Form.Control type="file" onChange={handleOnChangeFile} />
    //       <button className="trash-btn">
    //         <FontAwesomeIcon className="trash" icon={faTrashCan} />
    //       </button>
    //     </div>
    //   </Form.Group>
    // </>
  );
}

export default FormFileInput;