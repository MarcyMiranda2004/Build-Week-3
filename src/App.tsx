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

function App() {
  return (
    <>
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
}

export default App
