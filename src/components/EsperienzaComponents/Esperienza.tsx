import React, { useEffect, useState } from "react"
import { Button, Card, Col, Form, Modal, Row } from "react-bootstrap"

const userId = "68078f09d451810015ce83e3"
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3OGYwOWQ0NTE4MTAwMTVjZTgzZTMiLCJpYXQiOjE3NDUzMjU4MzMsImV4cCI6MTc0NjUzNTQzM30.uJOPPtgp8vvr1Y0R65E9hilZ2E0fEm22LZsvbmsnZPM"
const baseUrl = `https://striveschool-api.herokuapp.com/api/profile/${userId}/experiences`

const mesi = [
  "Gennaio",
  "Febbraio",
  "Marzo",
  "Aprile",
  "Maggio",
  "Giugno",
  "Luglio",
  "Agosto",
  "Settembre",
  "Ottobre",
  "Novembre",
  "Dicembre",
]

interface EsperienzaForm {
  qualifica: string
  tipoImpiego: string
  azienda: string
  localita: string
  dataInizioMese: string
  dataInizioAnno: string
  dataFineMese: string
  dataFineAnno: string
  descrizione: string
}

export default function Esperienza() {
  const [esperienze, setEsperienze] = useState<any[]>([])
  const [show, setShow] = useState(false)
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [modificaAttiva, setModificaAttiva] = useState(false)

  const [formData, setFormData] = useState<EsperienzaForm>({
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

  const fetchEsperienze = async () => {
    try {
      const res = await fetch(baseUrl, {
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!res.ok) throw new Error("Errore nel fetch delle esperienze")
      const data = await res.json()
      setEsperienze(data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchEsperienze()
  }, [])

  const handleClose = () => {
    setShow(false)
    setEditingIndex(null)
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
  }

  const handleShow = () => setShow(true)

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const esperienza = {
      role: formData.qualifica,
      company: formData.azienda,
      startDate: `${formData.dataInizioAnno}-${String(
        mesi.indexOf(formData.dataInizioMese) + 1
      ).padStart(2, "0")}-01`,
      endDate:
        formData.dataFineAnno && formData.dataFineMese
          ? `${formData.dataFineAnno}-${String(
              mesi.indexOf(formData.dataFineMese) + 1
            ).padStart(2, "0")}-01`
          : null,
      description: formData.descrizione,
      area: formData.localita,
    }

    try {
      let response
      if (editingIndex !== null) {
        const id = esperienze[editingIndex]._id
        response = await fetch(`${baseUrl}/${id}`, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(esperienza),
        })
      } else {
        response = await fetch(baseUrl, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(esperienza),
        })
      }

      if (!response.ok) throw new Error("Errore nel salvataggio")

      await fetchEsperienze()
      handleClose()
    } catch (error) {
      console.error(error)
    }
  }

  const handleModifica = (index: number) => {
    const exp = esperienze[index]
    setFormData({
      qualifica: exp.role || "",
      tipoImpiego: "",
      azienda: exp.company || "",
      localita: exp.area || "",
      dataInizioMese: mesi[new Date(exp.startDate).getMonth()],
      dataInizioAnno: new Date(exp.startDate).getFullYear().toString(),
      dataFineMese: exp.endDate ? mesi[new Date(exp.endDate).getMonth()] : "",
      dataFineAnno: exp.endDate
        ? new Date(exp.endDate).getFullYear().toString()
        : "",
      descrizione: exp.description || "",
    })
    setEditingIndex(index)
    setShow(true)
  }

  const handleElimina = async (index: number) => {
    const id = esperienze[index]._id
    try {
      const res = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })
      if (!res.ok) throw new Error("Errore nell'eliminazione")
      await fetchEsperienze()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-center">
          <h4 className="ms-2 ">Esperienza</h4>
          <div>
            <Button
              variant="outline-black"
              size="sm"
              onClick={handleShow}
              className="ms-2"
            >
              <span className="fs-5">+</span>
            </Button>
            <Button
              variant="outline-black"
              size="sm"
              onClick={() => setModificaAttiva(!modificaAttiva)}
            >
              {modificaAttiva ? "Annulla" : <i className="bi bi-pencil"></i>}
            </Button>
          </div>
        </Card.Title>

        {esperienze.map((exp, index) => (
          <Card key={index} className="my-2 border-0">
            <Card.Body>
              <Card.Title>
                {" "}
                <p className=" mb-0">{exp.role}</p>
                <small>{exp.company}</small>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                dal {exp.startDate?.slice(0, 7)} al
                {exp.endDate?.slice(0, 7) || "Presente"}
              </Card.Subtitle>
              <Card.Text>{exp.description}</Card.Text>
              <hr />
              {modificaAttiva && (
                <div className="d-flex gap-2">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => handleModifica(index)}
                  >
                    Modifica
                  </Button>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => handleElimina(index)}
                  >
                    Elimina
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        ))}
      </Card.Body>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {editingIndex !== null
              ? "Modifica esperienza"
              : "Aggiungi esperienza"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Qualifica</Form.Label>
              <Form.Control
                type="text"
                name="qualifica"
                value={formData.qualifica}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Azienda</Form.Label>
              <Form.Control
                type="text"
                name="azienda"
                value={formData.azienda}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Mese inizio</Form.Label>
                  <Form.Select
                    name="dataInizioMese"
                    value={formData.dataInizioMese}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleziona</option>
                    {mesi.map((mese, i) => (
                      <option key={i}>{mese}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Anno inizio</Form.Label>
                  <Form.Control
                    type="number"
                    name="dataInizioAnno"
                    value={formData.dataInizioAnno}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Mese fine</Form.Label>
                  <Form.Select
                    name="dataFineMese"
                    value={formData.dataFineMese}
                    onChange={handleChange}
                  >
                    <option value="">Seleziona</option>
                    {mesi.map((mese, i) => (
                      <option key={i}>{mese}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Anno fine</Form.Label>
                  <Form.Control
                    type="number"
                    name="dataFineAnno"
                    value={formData.dataFineAnno}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Località</Form.Label>
              <Form.Control
                type="text"
                name="localita"
                value={formData.localita}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                name="descrizione"
                value={formData.descrizione}
                onChange={handleChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              {editingIndex !== null ? "Salva modifiche" : "Aggiungi"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Card>
  )
}
