import { useEffect, useState } from "react";
import { Pencil, ShieldCheck } from "react-bootstrap-icons";
import {
  Button,
  Container,
  Dropdown,
  ButtonGroup,
  Spinner,
} from "react-bootstrap";
import SwitchImage from "./SwitchImage";

const BARER_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA5MjJmZTFmMzVjZjAwMTU1MTdhNDUiLCJpYXQiOjE3NDU0MjkyNDYsImV4cCI6MTc0NjYzODg0Nn0.PG5gltWSicJUVa4Fu_JY0I1X7JhyRSoe-LK2_c7FZYs";
const URL = "https://striveschool-api.herokuapp.com/api/profile/me";

interface Profile {
  name: string;
  surname: string;
  email: string;
  username: string;
  bio: string;
  title: string;
  area: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

const InformationUser = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = () => {
      fetch(URL, {
        headers: {
          Authorization: `Bearer ${BARER_TOKEN}`,
        },
      })
        .then((response) => response.json())
        .then((data) => setProfile(data))
        .catch((error) => console.error("Error fetching profile:", error));
    };
    fetchProfile();
  }, []);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleImageUpdate = (newImage: string) => {
    if (profile) {
      setProfile({ ...profile, image: newImage });
      window.location.reload();
    }
  };

  if (!profile) {
    return (
      <div className="text-center">
        <Spinner animation="border" size="sm" />
      </div>
    );
  }

  return (
    <Container className="bg-white d-flex justify-content-center align-items-center rounded-5 border border-1 border-lk-light mt-3 p-0">
      <div className="profile-card rounded-3 p-0 bg-white w-100">
        <div className="header-section position-relative mb-3">
          <img
            src={profile.image}
            className="cover-img w-100 rounded-top"
            alt="Cover"
          />
          <div className="d-flex justify-content-end">
            <Button
              className="d-flex mt-3 justify-content-end me-3 fs-5 rounded-circle border-0 Pen bg-transparent"
              onClick={handleOpenModal}
            >
              <Pencil size={20} className="text-lk-tertiary" />
            </Button>
          </div>
          <div className="profile-img-wrapper position-absolute">
            <img
              src={profile.image}
              alt="Profile"
              className="profile-img rounded-circle border border-4 border-white cursor-pointer"
              onClick={handleOpenModal}
            />
          </div>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <h2 className="ms-3 mb-0 name mt-0">
              {profile.name} {profile.surname} <ShieldCheck size={20} />
            </h2>
          </div>
          <p className="ms-3 mb-1">{profile.title}</p>
          <p className="ms-3 mb-1 text-lk-tertiary">
            {profile.area}, Italia ·{" "}
            <a
              className="text-decoration-none fw-semibold text-lk-primary"
              href="#"
            >
              Informazioni di contatto
            </a>
          </p>
          <p>
            <a
              className="text-decoration-none ms-3 text-lk-primary fw-semibold"
              href="#"
            >
              Collegamenti
            </a>
          </p>
        </div>

        <div className="d-flex flex-wrap ms-3 gap-3 mt-2">
          <Dropdown as={ButtonGroup} className="disponibile-dropdown">
            <Dropdown.Toggle
              className="btn bg-lk-primary disponibile rounded-5 text-light"
              id="dropdown-custom-1"
              style={{ border: "none", paddingRight: "20px" }}
            >
              Disponibile per
            </Dropdown.Toggle>

            <Dropdown.Menu className="shadow p-2" style={{ width: "300px" }}>
              <Dropdown.Item as="button" className="text-start">
                <div className="fw-bold">Selezione del personale</div>
                <small className="text-muted">
                  Fai sapere che stai facendo selezione e attrai candidati
                  qualificati.
                </small>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as="button" className="text-start">
                <div className="fw-bold">Servizi offerti</div>
                <small className="text-muted">
                  Metti in risalto i servizi che offri, così i nuovi clienti
                  potranno trovarti.
                </small>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Button className="btn btn-outline-lk-primary border-1 rounded-5 border-lk-primary otherButton bg-transparent text-lk-primary fw-semibold">
            Aggiungi sezione del profilo
          </Button>
          <Button className="btn btn-outline-lk-secondary border-1 rounded-5 border-lk-primary otherButton bg-transparent text-lk-primary fw-semibold">
            Migliora profilo
          </Button>
          <Button className="btn btn-light border-1 border-black rounded-5 risorse bg-transparent">
            Risorse
          </Button>
        </div>
        <div className="d-flex justify-content-between mt-4 gap-3 ms-2">
          <div className="alert alert-light border w-100 p-2">
            <p className="mb-1">
              <strong>Fai sapere che stai facendo selezione</strong> e attrai
              candidati qualificati.
            </p>
            <a href="#">Inizia</a>
          </div>
          <div className="alert alert-light border w-100 p-2 me-2">
            <p className="mb-1">
              <strong>Metti in risalto i tuoi servizi</strong> in un'apposita
              sezione sul tuo profilo.
            </p>
            <a href="#">Inizia</a>
          </div>
        </div>
      </div>
      <SwitchImage
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onImageUpdate={handleImageUpdate}
      />
    </Container>
  );
};

export default InformationUser;
