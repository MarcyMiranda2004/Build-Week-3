import "./App.css";
import Footer from "./components/Footer";
import LinkedInNavbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import RightSidebar from "./components/RightSidebar";
import { Col, Container, Row } from "react-bootstrap";
import Esperienza from "./components/EsperienzaComponents/Esperienza";
import Formazione from "./components/EsperienzaComponents/Formazione";
import Competenze from "./components/EsperienzaComponents/Competenze";
import Interessi from "./components/EsperienzaComponents/Interessi";
import Consigliati from "./components/Consigliati";
import Analisi from "./components/Analisi";
import Attività from "./components/Attività";
import InformationUser from "./components/InformationUser";
import { useState } from "react";
import UserClicked from "./components/UserClicked";

function App() {
  const [userId, setUserId] = useState<string | null>(null);
  return (
    <>
      <div className="sticky-top">
        <LinkedInNavbar />
      </div>
      <main>
        <Container>
          <Row className="justify-content-center">
            <Col xs={12} md={9}>
              <InformationUser />
              <Consigliati />
              <Analisi />
              <Attività />
              <Esperienza />
              <Formazione />
              <Competenze />
              <Interessi />
              {userId && <UserClicked userId={userId} />}
            </Col>
            <Col xs={3} className="d-none d-md-block">
              <RightSidebar onUserClick={setUserId} />
            <Col xs={3} className="d-none d-lg-block">
              <RightSidebar
                language="Italiano"
                publicUrl="https://linkedin.com/in/Marcello Miranda"
              />
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
