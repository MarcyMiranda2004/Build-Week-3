// src/components/EsperienzaModal.tsx
import { Modal, Form, Button, Row, Col } from "react-bootstrap"

interface Props {
  show: boolean
  onHide: () => void
  formData: any
  onChange: (e: React.ChangeEvent<any>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const mesi = [
  "",
  "gen",
  "feb",
  "mar",
  "apr",
  "mag",
  "giu",
  "lug",
  "ago",
  "set",
  "ott",
  "nov",
  "dic",
]
const anni = Array.from({ length: 50 }, (_, i) => (1975 + i).toString())

const EsperienzaModal = ({
  show,
  onHide,
  formData,
  onChange,
  onSubmit,
}: Props) => (
  <Modal show={show} onHide={onHide} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>Aggiungi Esperienza</Modal.Title>
    </Modal.Header>
    <Form onSubmit={onSubmit}>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Qualifica*</Form.Label>
          <Form.Control
            name="qualifica"
            value={formData.qualifica}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tipo di impiego</Form.Label>
          <Form.Select
            name="tipoImpiego"
            value={formData.tipoImpiego}
            onChange={onChange}
          >
            <option value="">Seleziona</option>
            <option value="Tempo pieno">Tempo pieno</option>
            <option value="Part-time">Part-time</option>
            <option value="Freelance">Freelance</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Azienda*</Form.Label>
          <Form.Control
            name="azienda"
            value={formData.azienda}
            onChange={onChange}
          />
        </Form.Group>

        <Row>
          <Col>
            <Form.Label>Data di inizio*</Form.Label>
            <Form.Select
              name="dataInizioMese"
              value={formData.dataInizioMese}
              onChange={onChange}
            >
              {mesi.map((m, i) => (
                <option key={i}>{m}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>&nbsp;</Form.Label>
            <Form.Select
              name="dataInizioAnno"
              value={formData.dataInizioAnno}
              onChange={onChange}
            >
              {anni.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col>
            <Form.Label>Data di fine*</Form.Label>
            <Form.Select
              name="dataFineMese"
              value={formData.dataFineMese}
              onChange={onChange}
            >
              {mesi.map((m, i) => (
                <option key={i}>{m}</option>
              ))}
            </Form.Select>
          </Col>
          <Col>
            <Form.Label>&nbsp;</Form.Label>
            <Form.Select
              name="dataFineAnno"
              value={formData.dataFineAnno}
              onChange={onChange}
            >
              {anni.map((a) => (
                <option key={a}>{a}</option>
              ))}
            </Form.Select>
          </Col>
        </Row>

        <Form.Group className="mt-3">
          <Form.Label>Località</Form.Label>
          <Form.Control
            name="localita"
            value={formData.localita}
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Descrizione</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="descrizione"
            value={formData.descrizione}
            onChange={onChange}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Chiudi
        </Button>
        <Button variant="primary" type="submit">
          Salva
        </Button>
      </Modal.Footer>
    </Form>
  </Modal>
)

export default EsperienzaModal
