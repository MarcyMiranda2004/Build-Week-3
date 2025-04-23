import "../style/ConsigliatiAnalisiAttività.css";
import { Container, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { EyeFill } from "react-bootstrap-icons";
import doc_icon from "../assets/doc_icon.svg";

const Consigliati = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Modale per aggiungere un riepilogo */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header
          closeButton
          className="border-0 p-1 pe-3 border-bottom border-1 border-lk-light"
        >
          <Modal.Title className="d-flex modalProfile rounded-4 p-3 pb-1">
            <h5>Aggiungi un riepilogo</h5>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="pt-3 mb-3">
          <h5>Aggiungi Un riepilogo</h5>
          <p>
            Puoi includere anni di esperienza, settore o competenze acquisite.
            Potresti anche inserire i risultati raggiunti o le esperienze di
            lavoro precedenti.
          </p>
          <textarea
            id="myTextArea"
            rows={8}
            cols={50}
            className="form-control border-1 border-black"
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleClose}
            className="rounded-pill px-4 fw-semibold bg-lk-primary text-white publicPost"
          >
            Salva
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Main del componente */}
      <Container className="border border-1 rounded-3 border-lk-light p-4 mt-2 bg-lk-secondary">
        <div>
          <h4 className=" m-0">Consigliati per te</h4>

          <span className="d-flex gap-1 text-lk-tertiary mt-1 ">
            <EyeFill size={16} className="text-lk-tertiary mt-1" />
            <p className="small ">Solo per te</p>
          </span>
        </div>

        <div className="d-flex flex-column mt-1 p-3 border border-1 rounded-3 border-lk-light">
          <span className="d-flex align-items-center mb-3">
            <img src={doc_icon} alt="doc_icon" />

            <strong className="ms-2">
              Scrivi un riepilogo per mettere in evidenza la tua personalità o
              la tua esperienza lavorativa
            </strong>
          </span>

          <p>
            Gli utenti che includono un riepilogo ricevono fino a 3.9 volte più
            visualizzazioni del profilo.
          </p>

          <Button
            className="bg-transparent rounded-pill border border-1 border-black fw-semibold addRiepilogo text-lk-tertiary"
            onClick={handleShow}
          >
            Aggiungi un Riepilogo
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Consigliati;
