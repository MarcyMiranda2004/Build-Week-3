import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Form, FormControl, Container, Image, Dropdown } from 'react-bootstrap';
import {
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  Grid3x3GapFill,

} from 'react-bootstrap-icons';


const LinkedInNavbar: React.FC = () => {
 const [isScolled,setIsScrolled] = useState(false)

 const hanldeScroll = ()=> {
    if (window.scrollY>1) {
        setIsScrolled(true)
    } else {
        setIsScrolled(false)
    }
 }

 useEffect(()=>{
    window.addEventListener('scroll', hanldeScroll)
    return ()=> {
        window.removeEventListener('scroll', hanldeScroll)
    }
},[]);


  return (
    <Navbar bg="white" className={`navbar ${isScolled ? 'navbar-sctrolled':''}`} >
      <Container fluid className="d-flex align-items-center">
      
        <div className="d-flex align-items-center justify-content-center flex-grow-1 gap-3">
          <Image src="https://cdn-icons-png.flaticon.com/512/174/174857.png" width={34} height={34} alt="LinkedIn" />
          <Form className="ms-2">
            <FormControl
              type="search"
              placeholder="Cerca"
              className="me-2 - border-radius-2"
              style={{ width: '250px' }}
            />
          </Form>
        </div>

       
        <Nav className="d-flex align-items-center justify-content-center flex-grow-1 gap-3">
          <div className="text-center small">
            <HouseDoorFill size={20} />
            <div>Home</div>
          </div>
          <div className="text-center small">
            <PeopleFill size={20} />
            <div>Rete</div>
          </div>
          <div className="text-center small">
            <BriefcaseFill size={20} />
            <div>Lavoro</div>
          </div>
          <div className="text-center small">
            <ChatDotsFill size={20} />
            <div>Messaggistica</div>
          </div>
          <div className="text-center small position-relative">
            <BellFill size={20} />
            <div>Notifiche</div>
          </div>

          <Dropdown align="end">
            <Dropdown.Toggle variant="link" className="p-0 d-flex flex-column align-items-center text-decoration-none text-dark">
              <Image
                src="https://placehold.co/32x32"
                roundedCircle
                width={32}
                height={32}
                alt="Tu"
              />
              <div>Tu </div>
              <div className="border-start border-2 h-100 mx-2"></div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Profilo</Dropdown.Item>
              <Dropdown.Item>Impostazioni</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item>Esci</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* Questa è una linea vericale, aggiunta così un pò a caso :D*/}
          <div style={{
            height: '24px',
            width: '2px',
            backgroundColor: '#ccc',
            alignSelf: 'center'
          }}></div>
         
          <Dropdown align="end">
            <Dropdown.Toggle variant="link" className="p-0 d-flex flex-column align-items-center text-decoration-none text-dark">
              <Grid3x3GapFill size={20} />
              <div>Per le aziende </div>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Talent Solutions</Dropdown.Item>
              <Dropdown.Item>Marketing Solutions</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default LinkedInNavbar;
