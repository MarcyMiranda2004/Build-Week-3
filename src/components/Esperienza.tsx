import { Col, Container, Row, Button } from "react-bootstrap"
import { useState } from "react"
import EsperienzaModal from "./EsperienzaModal"

const Esperienza = () => {
  const [show, setShow] = useState(false)
  const [esperienze, setEsperienze] = useState<any[]>([])
  const [formData, setFormData] = useState({
    qualifica: "",
    tipoImpiego: "",
    azienda: "",
    localita: "",
    dataInizioMese: "",
    dataInizioAnno: "",
    dataFineMese: "",
    dataFineAnno: "",
    descrizione: "",
  })

  const handleChange = (e: React.ChangeEvent<any>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setEsperienze((prev) => [...prev, formData])
    setFormData({
      qualifica: "",
      tipoImpiego: "",
      azienda: "",
      localita: "",
      dataInizioMese: "",
      dataInizioAnno: "",
      dataFineMese: "",
      dataFineAnno: "",
      descrizione: "",
    })
    setShow(false)
  }

  return (
    <Container className="bg-white border rounded-3 my-3">
      <Row className="align-items-center mb-3">
        <Col>
          <h4 className="ms-2 mt-3">Esperienza</h4>
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={() => setShow(true)}>
            <span className="fs-5">+</span>
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
            <small>
              {exp.azienda} · {exp.tipoImpiego}
            </small>
            <br />
            <small className="text-black-50">
              {exp.dataInizioMese} {exp.dataInizioAnno} – {exp.dataFineMese}{" "}
              {exp.dataFineAnno}
            </small>
            <br />
            <small className="text-black-50">
              {exp.localita} {exp.localita && "· In sede"}
            </small>
            <p className="mt-3">{exp.descrizione}</p>
            <p className="fw-bolder">
              <i className="bi bi-gem me-2"></i>Problem solving, Formazione
            </p>
            <hr />
          </Col>
        </Row>
      ))}

      {/* Esperienza fissa */}
      <Row className="mb-3">
        <Col xs="1">
          <img
            className="w-100"
            src="https://yt3.googleusercontent.com/Jl_wJgbSzmfFqBXOVYTI-tdCDykgbzkhenHjSoigmZ5WGjDijWn5Y0aKTo6Z4HMSzOHvtu4p7g=s900-c-k-c0x00ffffff-no-rj"
            alt="Epicode"
          />
        </Col>
        <Col xs="10">
          <p className="fw-bold mb-0 fs-5">Full stack Developer</p>
          <small>Epicode</small>
          <br />
          <small className="text-black-50">mar 2054 – mag 2074</small>
          <br />
          <small className="text-black-50">Roma</small>
          <p className="mt-3">
            Sviluppatore Full Stack con esperienza nello sviluppo di
            applicazioni moderne...
          </p>
          <p className="fw-bolder">
            <i className="bi bi-gem me-2"></i>React, Angular, Vue.js, HTML5,
            CSS3, JavaScript/TypeScript, Bootstrap, TailwindCSS
          </p>
        </Col>
      </Row>

      <EsperienzaModal
        show={show}
        onHide={() => setShow(false)}
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Container>
  )
}

export default Esperienza
