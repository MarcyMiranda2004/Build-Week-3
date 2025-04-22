import { Col, Container, Row, Button } from "react-bootstrap"
import { useState } from "react"
import TitoloModal from "./TitoloModal"
import "bootstrap-icons/font/bootstrap-icons.css"

const Competenze = () => {
  const [show, setShow] = useState(false)
  const [titoli, setTitoli] = useState<any[]>([])
  const [formData, setFormData] = useState({ nome: "", ente: "" })

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTitoli((prev) => [...prev, formData])
    setFormData({ nome: "", ente: "" })
    setShow(false)
  }

  return (
    <Container className="bg-white border rounded-3 mt-4">
      <Row className="align-items-center mb-3">
        <Col>
          <h4 className="ms-2 mt-3">Competenze</h4>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={() => setShow(true)}>
            <span className="fs-5">+</span>
          </Button>
        </Col>
      </Row>

      {titoli.map((titolo, idx) => (
        <Row key={idx} className="mb-3">
          <Col xs="12">
            <p className="fw-bold mb-0 ms-2">{titolo.nome}</p>{" "}
          </Col>
          <Col xs="12">
            <i className="bi bi-fire ms-2"></i>{" "}
            <small className=" ms-2">{titolo.ente}</small>
            <hr />
          </Col>
        </Row>
      ))}
      <Row className="mb-3">
        <Col xs="12">
          <p className="fw-bold mb-0 ms-2">React, JavaScript + 30...</p>{" "}
        </Col>
        <Col xs="12">
          <i className="bi bi-award-fill ms-2"></i>
          <small className=" ms-2">Epicode</small>
        </Col>
      </Row>

      <TitoloModal
        show={show}
        onHide={() => setShow(false)}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Container>
  )
}

export default Competenze
