import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import {
  QuestionCircle,
  GearFill,
  InfoCircle,
} from 'react-bootstrap-icons';

const FooterLinkedIn: React.FC = () => {
  return (
    <footer className="bg-light py-4 px-3">
      <Container fluid="lg">
        <Row xs={1} md={2} lg={5}>
          <Col>
            <div className="small d-flex flex-column gap-1">
              <p className="fw-bold mb-1">Informazioni</p>
              <p className="mb-1">Informativa sulla community professionale</p>
              <p className="mb-1">Privacy e condizioni ▾</p>
              <p className="mb-1">Sales Solutions</p>
              <p className="mb-1">Centro sicurezza</p>
              <p className="mt-3 mb-0"> TEAM6 for Epicode &copy; 2025 -LinkedIn Clone </p>
              </div>
          </Col>
         <Col>
         <div className="small d-flex flex-column gap-1">
              <p className="fw-bold mt-1 mb-1">Accessibilità</p>
              <p className="mb-1">Carriera</p>
              <p className="mb-1">Opzioni per gli annunci pubblicitari</p>
              <p className="mb-1">Mobile</p>
            </div>
            </Col>
          <Col>
            <div className="small d-flex flex-column gap-1">
              <p className="fw-bold mb-1">Talent Solutions</p>
              <p className="mb-1">Soluzioni di marketing</p>
              <p className="mb-1">Pubblicità</p>
              <p className="mb-1">Piccole imprese</p>
            </div>
          </Col>

          <Col>
            <div className="small d-flex flex-column gap-2">
              <div className="d-flex align-items-start gap-2">
                <div>
                  <strong><QuestionCircle /> Domande?</strong>
                  <div>Visita il nostro Centro assistenza.</div>
                </div>
              </div>

              <div className="d-flex align-items-start gap-2">
                <div>
                  <strong><GearFill /> Gestisci il tuo account e la tua privacy</strong>
                  <div>Vai alle impostazioni</div>
                </div>
              </div>

              <div className="d-flex align-items-start gap-2">
                <div>
                  <strong><InfoCircle /> Trasparenza sui contenuti consigliati</strong>
                  <div>Scopri di più sui contenuti consigliati.</div>
                </div>
              </div>
            </div>
          </Col>

          <Col>
            <Form.Select aria-label="Seleziona lingua" className="w-75 mt-2">
              <option>Italiano (Italiano)</option>
              <option>English (English)</option>
              <option>Français (Français)</option>
              <option>Deutsch (Deutsch)</option>
              <option>Español (Español)</option>
            </Form.Select>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterLinkedIn;
