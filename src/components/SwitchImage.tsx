import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

interface SwitchImageProps {
  isOpen: boolean;
  onClose: () => void;
  onImageUpdate: (newImage: string) => void;
}

const BARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA5MjJmZTFmMzVjZjAwMTU1MTdhNDUiLCJpYXQiOjE3NDU0MjkyNDYsImV4cCI6MTc0NjYzODg0Nn0.PG5gltWSicJUVa4Fu_JY0I1X7JhyRSoe-LK2_c7FZYs";

const SwitchImage = ({ isOpen, onClose, onImageUpdate }: SwitchImageProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("profile", selectedFile);

    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/680922fe1f35cf0015517a45/picture",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${BARER_TOKEN}`,
        },
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          onClose();
          onImageUpdate("NUOVA_IMMAGINE_URL");
        } else {
          console.error("Errore nel caricamento immagine");
        }
      })
      .catch((error) => {
        console.error("Errore nella richiesta:", error);
      });
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica immagine profilo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Carica una nuova immagine</Form.Label>
          <Form.Control type="file" onChange={handleFileChange} />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Annulla
        </Button>
        <Button variant="primary" onClick={handleUpload}>
          Carica
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SwitchImage;
