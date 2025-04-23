import React, { useEffect, useState } from "react"
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Image,
  Dropdown,
} from "react-bootstrap"
import {
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  Grid3x3GapFill,
} from "react-bootstrap-icons"

const LinkedInNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 1)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <Navbar
      bg="white"
      expand="md"
      className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}
      fixed="top"
    >
      <Container fluid>
       
        <div className="d-flex align-items-center flex-grow-1 gap-2">
          <Image
            src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
            width={34}
            height={34}
            alt="LinkedIn"
          />
          <Form className="d-none d-md-block ms-2">
            <FormControl
              type="search"
              placeholder="Cerca"
              className="me-2"
              style={{ width: "250px" }}
            />
          </Form>
        </div>

     
        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="justify-content-end">
          <Nav className="d-flex align-items-center gap-3">
            <div className="text-center small">
              <HouseDoorFill size={20} />
              <div className=" d-md-block">Home</div>
            </div>
            <div className="text-center small">
              <PeopleFill size={20} />
              <div className=" d-md-block">Rete</div>
            </div>
            <div className="text-center small">
              <BriefcaseFill size={20} />
              <div className=" d-md-block">Lavoro</div>
            </div>
            <div className="text-center small">
              <ChatDotsFill size={20} />
              <div className=" d-md-block">Messaggi</div>
            </div>
            <div className="text-center small position-relative">
              <BellFill size={20} />
              <div className=" d-md-block">Notifiche</div>
            </div>
            
      
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="link"
                className="p-0 d-flex flex-column align-items-center text-decoration-none text-dark"
              >
                <Image
                  src="https://placehold.co/32x32"
                  roundedCircle
                  width={32}
                  height={32}
                  alt="Tu"
                />
                <div className="d-none d-md-block">Tu</div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Profilo</Dropdown.Item>
                <Dropdown.Item>Impostazioni</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Esci</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            
            <div
              className="d-none d-md-block"
              style={{
                height: "24px",
                width: "2px",
                backgroundColor: "#ccc",
                alignSelf: "center",
              }}
            ></div>

           
            <Dropdown align="end">
              <Dropdown.Toggle
                variant="link"
                className="p-0 d-flex flex-column align-items-center text-decoration-none text-dark"
              >
                <Grid3x3GapFill size={20} />
                <div className="d-none d-md-block">Per le aziende</div>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Talent Solutions</Dropdown.Item>
                <Dropdown.Item>Marketing Solutions</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default LinkedInNavbar
