import { Modal, Form, Button } from "react-bootstrap"

interface Props {
  show: boolean
  onHide: () => void
  formData: any
  onChange: (e: React.ChangeEvent<any>) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const TitoloModal = ({ show, onHide, formData, onChange, onSubmit }: Props) => (
  <Modal show={show} onHide={onHide} animation={false}>
    <Modal.Header closeButton>
      <Modal.Title>Aggiungi competenza</Modal.Title>
    </Modal.Header>
    <Form onSubmit={onSubmit}>
      <Modal.Body>
        <Form.Group className="mb-3">
          <Form.Label>Competenza*</Form.Label>
          <Form.Control
            name="nome"
            value={formData.nome}
            onChange={onChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ente erogatore*</Form.Label>
          <Form.Control
            name="ente"
            value={formData.ente}
            onChange={onChange}
            required
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

export default TitoloModal
