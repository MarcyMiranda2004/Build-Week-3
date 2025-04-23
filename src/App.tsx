<<<<<<< Updated upstream
import "./App.css"
import Footer from "./components/Footer"
import LinkedInNavbar from "./components/Navbar"
import "bootstrap/dist/css/bootstrap.min.css"
import RightSidebar from "./components/RightSidebar"
import { Col, Container, Row } from "react-bootstrap"
import Esperienza from "./components/EsperienzaComponents/Esperienza"
import Formazione from "./components/EsperienzaComponents/Formazione"
import Competenze from "./components/EsperienzaComponents/Competenze"
import Interessi from "./components/EsperienzaComponents/Interessi"
=======
import "./App.css";
import Consigliati from "./components/Consigliati";
import Analisi from "./components/Analisi";
import Attività from "./components/Attività";
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes

function App() {
  return (
    <>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <div className=" sticky-top">
        <LinkedInNavbar />
      </div>
      <main>
        <Container>
          <Row className=" justify-content-center">
            <Col xs="6">
              <Esperienza />
              <Formazione />
              <Competenze />
              <Interessi />
            </Col>
            <Col xs="3">
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
  )
=======
=======
>>>>>>> Stashed changes
      <Consigliati />
      <Analisi />
      <Attività />
    </>
  );
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
}

export default App
