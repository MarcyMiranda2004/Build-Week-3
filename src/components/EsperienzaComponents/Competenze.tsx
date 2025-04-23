import { Col, Container, Row, Button } from "react-bootstrap";
import { useState } from "react";
import TitoloModal from "./TitoloModal";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ArrowRight } from "react-bootstrap-icons";

export type TitoloItem = {
  id: number;
  nome: string;
  ente: string;
};

const Competenze = () => {
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [titoli, setTitoli] = useState<TitoloItem[]>([]);
  const [formData, setFormData] = useState<TitoloItem>({
    id: Date.now(),
    nome: "",
    ente: "",
  });

  const handleShow = () => {
    setEditingIndex(null);
    setShow(true);
  };

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updated = [...titoli];
      updated[editingIndex] = { ...formData, id: titoli[editingIndex].id };
      setTitoli(updated);
    } else {
      setTitoli((prev) => [...prev, { ...formData, id: Date.now() }]);
    }
    setFormData({ id: Date.now(), nome: "", ente: "" });
    setEditingIndex(null);
    setShow(false);
  };

  const handleEdit = (index: number) => {
    setFormData(titoli[index]);
    setEditingIndex(index);
    setShow(true);
  };

  return (
    <Container className="bg-white border rounded-3 my-1 p-0">
      <div className="px-2">
        <Row className="align-items-center mb-3">
          <Col>
            <h4 className="ms-2 mt-3">Competenze</h4>
          </Col>
          <Col xs="auto">
            <Button variant="outline-black" onClick={handleShow}>
              <span className="fs-5">+</span>
            </Button>
            <Button
              variant="outline-black"
              className="me-2"
              onClick={() => setEditMode((prev) => !prev)}
            >
              <i className="bi bi-pencil"></i>
            </Button>
          </Col>
        </Row>

        {titoli.map((titolo) => (
          <Row key={titolo.id} className="mb-3 ms-1">
            <Col xs="10">
              <p className="fw-bold mb-0 ms-2">{titolo.nome}</p>
              <i className="bi bi-fire ms-2"></i>
              <small className="ms-2">{titolo.ente}</small>
              <hr />
            </Col>
            {editMode && (
              <Col
                xs="2"
                className="d-flex align-items-center justify-content-end"
              >
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={() =>
                    handleEdit(titoli.findIndex((t) => t.id === titolo.id))
                  }
                >
                  Modifica
                </Button>
              </Col>
            )}
          </Row>
        ))}
      </div>

      <Row className="mb-3 ms-2">
        <Col xs="12">
          <p className="fw-bold mb-0 ms-2">React, JavaScript + 30...</p>
        </Col>
        <Col xs="12">
          <i className="bi bi-award-fill ms-2"></i>
          <small className="ms-2">Epicode</small>
        </Col>
      </Row>

      <TitoloModal
        show={show}
        onHide={() => {
          setShow(false);
          setEditingIndex(null);
        }}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <a className="text-decoration-none text-lk-tertiary d-flex justify-content-center align-items-center border-top border-1 border-lk-light mt-2 p-2 showAnalisi">
        <span className="fw-semibold me-2">Mostra tutte le attività </span>
        <ArrowRight className="text-lk-tertiary" size={16} />
      </a>
    </Container>
  );
};

export default Competenze;
