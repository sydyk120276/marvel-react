import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Modalka({ character }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

//   const comiks = character.comics
//  let comiksName = comiks[0].name

//   console.log("comiks: ", comiks[0]);
//   console.log("comiks: ", comiksName);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        продолжение
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{character.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            <img
              className="img-fluid rounded-start"
              src={character.thumbnail}
              alt={character.name}
            />
          }
          {character.modified}
          <h5>Описание:</h5>
          {character.description}
          <h5>Комиксы:</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Modalka;
