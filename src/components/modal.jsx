import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function Modalka({ character }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const comiks = character.comics

  console.log("comiks: ", comiks);

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
          {/* {<ul>
            {comiks.map((el) => (
              <li key={el.name}>{el.name}</li>
            ))}
          </ul>} */}
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
