import React from "react";
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import FotoPerfil from './FotoPerfil';

// Trocar essa foto
import defaultProfilePic from '../assets/images/defaultProfilePic.jpg';

import './FileInput.css';
import { atualizarFotos, atualizarNome, removerFotos } from "../services/userService";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faPen } from "@fortawesome/free-solid-svg-icons";

function FormFileInput({ username, profilePic }) {
    const [show, setShow] = useState(false);
    const [filename, setFilename] = useState(null);
    const [file, setFile] = useState(null);
    const [name, setName] = useState(username);

    const handleShow = () => {
        setFile(profilePic ? profilePic : defaultProfilePic);
        setShow(true);
    }
    const handleClose = () => {
        setShow(false);
        setFilename(null);
        setFile(null);
    }

    const handleSaveChanges = async () => {
        if (file && filename) {
            await atualizarFotos(file, filename);
        }

        if (name) {
            await atualizarNome(name);
        }

        setShow(false);
    }

    const handleDeleteClick = async () => {
        await removerFotos();
        setShow(false);
        onUpdateProfile();
    }

    const handleOnChangeFile = async (event) => {
        if (event.target.files && event.target.files[0]) {
            const url = URL.createObjectURL(event.target.files[0]);
            const name = event.target.files[0].name;
            setFilename(name);
            setFile(url);
        }
    };

    const handleOnChangeUsername = async (event) => {
        setName(event.target.value);
    }

    return (
        <div className='edit-foto-form'>
            <Button variant="owl-primary" onClick={handleShow}>
                <FontAwesomeIcon icon={faPen} />
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Alterar informações do perfil.</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalBody'>
                    <FotoPerfil src={file} />
                    <div className="modalEdit">
                        <Form.Group>
                            <Form.Label htmlFor="input-nome">Alterar nome de usuário</Form.Label>
                            <Form.Control id='input-nome' className="alt" type="text" defaultValue={username} onChange={handleOnChangeUsername} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label htmlFor="input-image">Alterar foto de perfil</Form.Label>
                            <Form.Control id='input-image' className="alt" type="file" onChange={handleOnChangeFile} accept="image/*" />
                        </Form.Group>
                        <Button variant='owl-danger' className="trash-btn" onClick={handleDeleteClick}>
                            <p>Remover foto de perfil</p>
                            <FontAwesomeIcon className="trash" icon={faTrashCan} />
                        </Button>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="owl-secondary" onClick={handleClose}>Cancelar</Button>
                    <Button variant="owl-primary" onClick={handleSaveChanges}>Salvar</Button>
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