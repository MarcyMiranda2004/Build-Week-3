import { useEffect, useState } from "react";
import { Spinner, Button, Container } from "react-bootstrap";
import { Pencil, X } from "react-bootstrap-icons";

const myAuthentication: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NjU3OWQ0NTE4MTAwMTVjZTgzZDciLCJpYXQiOjE3NDUzMTUxOTMsImV4cCI6MTc0NjUyNDc5M30.LvZeb9a9HfdVRsXZOEB03R-JzzhKzeXhAhzL8N5jqsM";

const UserClicked = ({ userId }: { userId: string }) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showProfile, setShowProfile] = useState(true);

  useEffect(() => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${userId}`, {
      headers: {
        Authorization: `Bearer ${myAuthentication}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserData(data);
        setLoading(false);
        console.log("Profilo?", data);
      })
      .catch((err) => {
        console.error("Errore durante la fetch dell'utente:", err);
      });
  }, [userId]);

  if (!showProfile) return null;

  if (loading || !userData) {
    return (
      <div className="text-center">
        <Spinner animation="border" size="sm" />
      </div>
    );
  }

  return (
    <Container className="bg-white d-flex justify-content-center align-items-center rounded-3 border border-1 border-lk-light mt-2 p-0">
      <div className="profile-card shadow p-0 bg-white">
        <div
          className="header-section position-relative mb-3"
          style={{ position: "relative" }}
        >
          <img
            src={userData.image}
            className="cover-img w-100 rounded-top"
            alt="Cover"
          />
          <X
            size={20}
            className="text-lk-tertiary position-absolute text-black bg-danger-subtle rounded-5"
            style={{ right: "5px", top: "5px", cursor: "pointer" }}
            onClick={() => setShowProfile(false)}
          />

          <div className="d-flex justify-content-end">
            <Button className="d-flex mt-3 justify-content-end me-3 fs-5 rounded-circle border-0 Pen bg-transparent">
              <Pencil size={20} className="text-lk-tertiary" />
            </Button>
          </div>
          <div className="profile-img-wrapper position-absolute">
            <img
              src={userData.image}
              alt="Profile"
              className="profile-img rounded-circle border border-4 border-white"
            />
          </div>
        </div>

        <div>
          <div className="d-flex justify-content-between">
            <h2 className="ms-3 mb-0 name mt-0">
              {userData.name} {userData.surname}
            </h2>
            <a className="epicode first border-0 mt-3 me-5  d-flex d-none d-md-flex text-decoration-none text-black fw-semibold">
              <img
                src="./public/epicode_logo.jpeg"
                alt="Epicode Logo"
                className="me-2"
                style={{ width: "20px", height: "20px" }}
              />
              EPICODE
            </a>
          </div>
          <p className="ms-3 mb-1">{userData.title}</p>
          <p className="ms-3 mb-1 country">
            {userData.area} .
            <a
              className="text-decoration-none fw-semibold text-lk-primary"
              href="#"
            >
              Informazioni di contatto
            </a>
          </p>
          <p>
            <a
              className="text-decoration-none ms-3 fw-semibold text-lk-primary"
              href="#"
            >
              9 collegamenti
            </a>
          </p>
        </div>

        <div className="d-flex flex-wrap ms-3 gap-3 mt-2">
          <Button className="btn bg-lk-primary disponibile rounded-5 text-light">
            Disponibile per
          </Button>

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
              Fai sapere che stai facendo selezione e attrai candidati
              qualificati.
            </p>
            <a href="#">Inizia</a>
          </div>
          <div className="alert alert-light border w-100 p-2 me-2">
            <p className="mb-1">
              Metti in <strong>risalto i tuoi servizi</strong> in un'apposita
              sezione sul tuo profilo.
            </p>
            <a href="#">Inizia</a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default UserClicked;
