import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/user.css";
import {  PencilFill } from 'react-bootstrap-icons';
import { Button } from "react-bootstrap";


function InformationUser() {
    return (
        <div className="profile-container d-flex justify-content-center align-items-center vh-80 mt-3">
            <div className="profile-card shadow p-0 bg-white">
                <div className="header-section position-relative mb-3">
                    <img
                        src="./public/IMG.JPG"
                        className="cover-img w-100 rounded-top"
                    />
                    <div className="d-flex justify-content-end">
                 <Button className="d-flex mt-3 justify-content-end me-3 fs-5 border-0 text-black pen rounded-circle  bg-light">
                    <PencilFill />
                 </Button>
                 </div>
                    
                    <div className="profile-img-wrapper position-absolute">
                        <img
                            src="./public/IMG.JPG"
                            alt="Profile"
                            className="profile-img rounded-circle border border-4 border-white"
                        />
                    </div>
                </div>
                <div>
                    <div className="d-flex  justify-content-between ">
                        <h2 className="ms-3 mb-0 name mt-0">Marcello Miranda</h2>
                        <button className=" firstb border-0 mt-3 bg-transparent me-5  d-flex d-none d-md-flex ">
                            <img src="./public/epicode_logo.jpeg" alt="Epicode Logo" className="me-2" style={{ width: '20px', height: '20px' }} />
                            EPICODE
                        </button>
                    </div>
                    <p className="ms-3 mb-1">Studente presso I.S Graziani</p>
                    <button className="border-0 me-5 ms-3 mt-2 mb-2 bg-transparent d-flex align-items-center d-md-none">
                        <img src="./public/epicode_logo.jpeg" alt="Epicode Logo" className="me-2" style={{ width: '20px', height: '20px' }} />
                        EPICODE
                    </button>
                    <p className="ms-3 mb-1 country">Terzigno, Campania, Italia · <a className="text-decoration-none" href="#"><b>Informazioni di contatto</b></a></p>
                    <p><a className="text-decoration-none ms-3" href="#">9 collegamenti</a></p>
                </div>
                <div className="d-flex flex-wrap ms-3  gap-3 mt-2">
                    <button className="btn btn-primary bg-primary rounded-5 text-light">Disponibile per</button>
                    <button className="btn btn-outline-primary border-1 rounded-5 border-primary">Aggiungi sezione del profilo</button>
                    <button className="btn btn-outline-secondary border-1 rounded-5 border-primary">Migliora profilo</button>
                    <button className="btn btn-light border-1 border-black rounded-5">Risorse</button>
                </div>
                <div className="d-flex justify-content-between mt-4 gap-3 ms-2">
                    <div className="alert alert-light border w-100 p-2">
                        <p className="mb-1">Fai sapere che stai facendo selezione e attrai candidati qualificati.</p>
                        <a href="#">Inizia</a>
                    </div>
                    <div className="alert alert-light border w-100 p-2 me-2">
                        <p className="mb-1">Metti in <strong>risalto i tuoi servizi</strong> in un'apposita sezione sul tuo profilo.</p>
                        <a href="#">Inizia</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
                    

export default InformationUser;