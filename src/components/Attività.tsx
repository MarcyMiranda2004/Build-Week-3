import "../style/ConsigliatiAnalisiAttività.css";
import { Container, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import {
  Pencil,
  ArrowRight,
  EmojiSmile,
  CardImage,
  Calendar,
  Asterisk,
  PlusLg,
  Clock,
} from "react-bootstrap-icons";

const Attività = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Modale per aggiungere un commento */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="d-flex modalProfile rounded-4 p-3 pb-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              alt="user_img"
              className="rounded-circle "
              style={{ width: "60px", height: "60px" }}
            />
            <div className="ms-3">
              <h4 className="lh-1">Nome Utente</h4>
              <p className="fs-6 lh-1">Pubblica: Chiunque</p>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="pt-1">
          <textarea
            id="myTextArea"
            rows={8}
            cols={50}
            placeholder="Di Cosa vorresti parlare ?"
            className="form-control border-0"
          />
          <EmojiSmile className="fw-semibold cursor-pointer" size={20} />
          <div className="d-flex mt-3">
            <CardImage
              className="text-lk-tertiary me-3 cursor-pointer"
              size={20}
            />
            <Calendar
              className="text-lk-tertiary mx-3 cursor-pointer"
              size={20}
            />
            <Asterisk
              className="text-lk-tertiary mx-3 cursor-pointer"
              size={20}
            />
            <PlusLg
              className="text-lk-tertiary mx-3 cursor-pointer"
              size={20}
            />
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Clock size={20} className="me-2 cursor-pointer" />

          <Button
            variant="primary"
            onClick={handleClose}
            className="rounded-pill px-4 fw-semibold bg-lk-primary text-white publicPost"
          >
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Main del componente */}
      <Container className="border border-1 rounded-3 border-lk-light mt-2 mb-1 bg-lk-secondary p-0">
        <div className="p-4 pb-0">
          <div className="d-flex justify-content-between">
            <h4 className="lh-1">Attività</h4>

            <div>
              <Button
                className="border border-1 border-primary p-1 px-3 rounded-pill text-lk-primary fw-semibold me-3 addPost bg-transparent"
                onClick={handleShow}
              >
                Crea un Post
              </Button>
              <Pencil size={20} className="fw-bold cursor-pointer" />
            </div>
          </div>

          <p className="text-lk-primary lh-1 fw-semibold">4 Follower</p>

          <strong>Non hai ancora pubblicato nulla</strong>
          <p>I post che condividi appariranno qui</p>
        </div>

        <a className="text-decoration-none text-lk-tertiary d-flex justify-content-center align-items-center border-top border-1 border-lk-light mt-2 p-2 showAnalisi">
          <span className="fw-semibold me-2">Mostra tutte le analisi </span>
          <ArrowRight className="text-lk-tertiary" size={16} />
        </a>
      </Container>
    </>
  );
};

export default Attività;
