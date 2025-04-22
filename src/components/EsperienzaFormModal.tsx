import { Modal, Button, Form, Row, Col } from "react-bootstrap"
import { ChangeEvent, FormEvent } from "react"

export type EsperienzaItem = {
  qualifica: string
  azienda: string
  dataInizioMese: string
  dataInizioAnno: string
  dataFineMese: string
  dataFineAnno: string
  descrizione: string
}

type Props = {
  show: boolean
  onHide: () => void
  formData: EsperienzaItem
  onChange: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => void
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const EsperienzaFormModal = ({
  show,
  onHide,
  formData,
  onChange,
  onSubmit,
}: Props) => {
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

  return (
    <Modal show={show} onHide={onHide} animation={false}>
      <Modal.Header closeButton>
        <Modal.Title>Aggiungi titolo di studio</Modal.Title>
      </Modal.Header>
      <Form onSubmit={onSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Titolo di studio*</Form.Label>
            <Form.Control
              type="text"
              name="qualifica"
              value={formData.qualifica}
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Scuola o università*</Form.Label>
            <Form.Control
              type="text"
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
                  <option key={i} value={m}>
                    {m}
                  </option>
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
                  <option key={a} value={a}>
                    {a}
                  </option>
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
                  <option key={i} value={m}>
                    {m}
                  </option>
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
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>

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
}

export default EsperienzaFormModal
