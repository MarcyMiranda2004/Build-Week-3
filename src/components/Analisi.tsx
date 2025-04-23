import "../style/ConsigliatiAnalisiAttività.css";
import { Container } from "react-bootstrap";
import {
  EyeFill,
  PeopleFill,
  BarChartLineFill,
  ArrowRight,
} from "react-bootstrap-icons";

const Analisi = () => {
  return (
    <Container className="border border-1 rounded-3 border-lk-light mt-2 bg-lk-secondary w-75 p-0">
      <div className="p-4">
        <h4 className=" m-0">Analisi</h4>

        <span className="d-flex gap-1 text-lk-tertiary mt-1">
          <EyeFill size={16} className="text-lk-tertiary mt-1" />
          <p className="small">Solo per te</p>
        </span>

        <Container className="d-flex">
          <div className="d-flex">
            <PeopleFill size={20} className="text-lk-tertiary me-2" />
            <div>
              <strong>42 visualizzazioni del profilo</strong>
              <p className="w-75">Scopri chi ha visualizzato il tuo profilo</p>
            </div>
          </div>

          <div className="d-flex">
            <BarChartLineFill size={20} className="text-lk-tertiary me-2" />

            <div>
              <strong>7 impressioni del posto</strong>
              <p className="w-75 m-0">
                Crea un post per aumentare l'interesse.
              </p>
              <p className="m-0 text-black-50">Ultimi 7 giorni</p>
            </div>
          </div>
        </Container>
      </div>

      <a className="text-decoration-none text-lk-tertiary d-flex justify-content-center align-items-center border-top border-1 border-lk-light mt-2 p-2 showAnalisi">
        <span className="fw-semibold me-2">Mostra tutte le analisi </span>
        <ArrowRight className="text-lk-tertiary" size={16} />
      </a>
    </Container>
  );
};

export default Analisi;
