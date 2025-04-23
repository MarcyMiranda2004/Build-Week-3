import React, { useEffect, useState } from 'react';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/user.css";
import { Pencil, ShieldCheck } from "react-bootstrap-icons";
import { Button, Container } from "react-bootstrap";

const BARER_TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA5MjJmZTFmMzVjZjAwMTU1MTdhNDUiLCJpYXQiOjE3NDU0MjkyNDYsImV4cCI6MTc0NjYzODg0Nn0.PG5gltWSicJUVa4Fu_JY0I1X7JhyRSoe-LK2_c7FZYs"
const URL ="https://striveschool-api.herokuapp.com/api/profile/me"


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

function InformationUser() {
  const [profile, setProfile] = useState<Profile | null>(null);


  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(URL, {
          headers: {
            Authorization:  `Bearer ${BARER_TOKEN}`
          },
        });
        if (response.ok) {
          const data = await response.json();
          setProfile(data);
        } else {
          console.error("Failed to fetch profile");
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="bg-white d-flex justify-content-center align-items-center rounded-3 border border-1 border-lk-light mt-2 p-0">
      <div className="profile-card p-0 bg-white">
        <div className="header-section position-relative mb-3">
          <img src={profile.image} className="cover-img w-100 rounded-top" />
          <div className="d-flex justify-content-end">
            <Button className="d-flex mt-3 justify-content-end me-3 fs-5 rounded-circle border-0 Pen bg-transparent">
              <Pencil size={20} className="text-lk-tertiary" />
            </Button>
          </div>
          <div className="profile-img-wrapper position-absolute">
            <img
              src={profile.image}
              alt="Profile"
              className="profile-img rounded-circle border border-4 border-white"
            />
          </div>
        </div>
        <div>
          <div className="d-flex  justify-content-between ">
            <h2 className="ms-3 mb-0 name mt-0">
              {profile.name} {profile.surname} <ShieldCheck size={20} />
            </h2>
            <a className=" epicode first border-0 mt-3 me-5  d-flex d-none d-md-flex text-decoration-none text-black fw-semibold">
              <img
                src="./public/epicode_logo.jpeg"
                alt="Epicode Logo"
                className="me-2"
                style={{ width: "20px", height: "20px" }}
              />
              EPICODE
            </a>
          </div>
          <p className="ms-3 mb-1">Studenti presso Epicode</p>
          <a className=" epicode border-0 me-5 ms-3 mt-2 mb-2s d-flex text-decoration-none text-black align-items-center d-md-none">
            <img
              src="./public/epicode_logo.jpeg"
              alt="Epicode Logo"
              className="me-2"
              style={{ width: "20px", height: "20px" }}
            />
            EPICODE
          </a>
          <p className="ms-3 mb-1 text-lk-tertiary">
            {profile.area}, Italia ·
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
}

export default InformationUser;