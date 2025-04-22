import { Col, Container, Row, Button } from "react-bootstrap"
import { useState } from "react"
import TitoloModal from "./TitoloModal"
import "bootstrap-icons/font/bootstrap-icons.css"

export type TitoloItem = {
  nome: string
  ente: string
}

const Competenze = () => {
  const [show, setShow] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [titoli, setTitoli] = useState<TitoloItem[]>([])
  const [formData, setFormData] = useState<TitoloItem>({ nome: "", ente: "" })

  const handleShow = () => {
    setEditingIndex(null)
    setShow(true)
  }

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editingIndex !== null) {
      const updated = [...titoli]
      updated[editingIndex] = formData
      setTitoli(updated)
    } else {
      setTitoli((prev) => [...prev, formData])
    }
    setFormData({ nome: "", ente: "" })
    setEditingIndex(null)
    setShow(false)
  }

  const handleEdit = (index: number) => {
    setFormData(titoli[index])
    setEditingIndex(index)
    setShow(true)
  }

  return (
    <Container className="bg-white border rounded-3 mt-4">
      <Row className="align-items-center mb-3">
        <Col>
          <h4 className="ms-2 mt-3">Competenze</h4>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={handleShow}>
            <span className="fs-5">+</span>
          </Button>{" "}
          <Button
            variant="outline-secondary"
            className="me-2"
            onClick={() => setEditMode((prev) => !prev)}
          >
            <i className="bi bi-pencil"></i>
          </Button>
        </Col>
      </Row>

      {titoli.map((titolo, idx) => (
        <Row key={idx} className="mb-3">
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
                onClick={() => handleEdit(idx)}
              >
                Modifica
              </Button>
            </Col>
          )}
        </Row>
      ))}

      {/* Competenza fissa */}
      <Row className="mb-3">
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
          setShow(false)
          setEditingIndex(null)
        }}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Container>
  )
}

export default Competenze
