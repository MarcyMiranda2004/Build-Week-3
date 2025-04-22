import { Col, Container, Row, Button } from "react-bootstrap"
import { useState, ChangeEvent, FormEvent } from "react"
import EsperienzaFormModal, { EsperienzaItem } from "./EsperienzaFormModal"

const Formazione = () => {
  const [show, setShow] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [esperienze, setEsperienze] = useState<EsperienzaItem[]>([])

  const [formData, setFormData] = useState<EsperienzaItem>({
    qualifica: "",
    azienda: "",
    dataInizioMese: "",
    dataInizioAnno: "",
    dataFineMese: "",
    dataFineAnno: "",
    descrizione: "",
  })

  const handleShow = () => setShow(true)
  const handleClose = () => {
    setShow(false)
    setEditIndex(null)
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (editIndex !== null) {
      const updated = [...esperienze]
      updated[editIndex] = formData
      setEsperienze(updated)
    } else {
      setEsperienze((prev) => [...prev, formData])
    }
    setFormData({
      qualifica: "",
      azienda: "",
      dataInizioMese: "",
      dataInizioAnno: "",
      dataFineMese: "",
      dataFineAnno: "",
      descrizione: "",
    })
    handleClose()
  }

  const handleEdit = (idx: number) => {
    setFormData(esperienze[idx])
    setEditIndex(idx)
    setShow(true)
  }

  return (
    <Container className="bg-white border rounded-3">
      <Row className="align-items-center mb-3">
        <Col>
          <h4 className="ms-2 mt-3">Formazione</h4>
        </Col>
        <Col xs="auto" className="d-flex gap-2">
          <Button variant="primary" onClick={() => handleShow()}>
            <span className="fs-5">+</span>
          </Button>
          <Button variant="secondary" onClick={() => setEditMode(!editMode)}>
            {editMode ? "Fine modifica" : <i className="bi bi-pencil"></i>}
          </Button>
        </Col>
      </Row>

      {esperienze.map((exp, idx) => (
        <Row key={idx} className="mb-3">
          <Col xs="1">
            <img
              className="w-100"
              src="https://cdn-icons-png.flaticon.com/512/8136/8136031.png"
              alt="placeholder"
            />
          </Col>
          <Col xs="10">
            <p className="fw-bold mb-0 fs-5">{exp.qualifica}</p>
            <small>{exp.azienda}</small>
            <br />
            <small className="text-black-50">
              {exp.dataInizioMese} {exp.dataInizioAnno} – {exp.dataFineMese}{" "}
              {exp.dataFineAnno}
            </small>
            {exp.descrizione && <p className="mt-2">{exp.descrizione}</p>}
            {editMode && (
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => handleEdit(idx)}
              >
                Modifica
              </Button>
            )}
            <hr />
          </Col>
        </Row>
      ))}

      {/* Formazione fissa */}
      <Row className="mb-3">
        <Col xs="1">
          <img
            className="w-100"
            src="https://yt3.googleusercontent.com/Jl_wJgbSzmfFqBXOVYTI-tdCDykgbzkhenHjSoigmZ5WGjDijWn5Y0aKTo6Z4HMSzOHvtu4p7g=s900-c-k-c0x00ffffff-no-rj"
            alt="placeholder img"
          />
        </Col>
        <Col xs="10">
          <p className="fw-bold mb-0 fs-5">Full stack Developer</p>
          <small>Epicode</small>
          <br />
          <small className="text-black-50">mar 1054 – mag 1074</small>
          <p className="mt-3">
            Studiare per diventare Full Stack Web Developer è molto pratico...
          </p>
          <p className="fw-bolder">
            <i className="bi bi-gem me-2"></i>React, Angular, Vue.js, HTML5,
            CSS3, JavaScript/TypeScript, Bootstrap, TailwindCSS
          </p>
        </Col>
      </Row>

      <EsperienzaFormModal
        show={show}
        onHide={handleClose}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Container>
  )
}

export default Formazione
