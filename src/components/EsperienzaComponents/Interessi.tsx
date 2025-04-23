import { Button, Col, Container, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

const Interessi = function () {
  return (
    <Container className=" bg-white my-2 border rounded-3">
      <Row>
        <h4 className="ms-2 mt-3">Interessi</h4>
        <Tabs
          defaultActiveKey="home"
          transition={false}
          id="noanim-tab-example"
          className="mb-3 ms-3"
        >
          <Tab eventKey="home" title="Aziende">
            <Container>
              <Row>
                <Col xs="12" md="6">
                  <Row>
                    <Col xs="1">
                      <img
                        className=" w-100"
                        src="https://help.apple.com/assets/67E1D466D1A1E142910B49DB/67E1D46AE03ADF0486097DE7/it_IT/cfef5ce601689564e0a39b4773f20815.png"
                        alt="logo"
                      />
                    </Col>
                    <Col xs="10">
                      <p>Apple inc.</p>
                      <p>156.549.000 followers</p>
                      <Button
                        className=" border border-black mb-3"
                        variant=" outline-dark"
                      >
                        ✔️ Già segui
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col xs="12" md="6">
                  <Row>
                    <Col xs="1">
                      <img
                        className=" w-100"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
                        alt="logo"
                      />
                    </Col>
                    <Col xs="10">
                      <p>Microsoft</p>
                      <p>6.549.000 followers</p>
                      <Button
                        className=" border border-black mb-3"
                        variant=" outline-dark"
                      >
                        ✔️ Già segui
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="profile" title="Scuole o universita'">
            <Container>
              <Row>
                <Col xs="12" md="6">
                  <Row>
                    <Col xs="1">
                      <img
                        className=" w-100"
                        src="https://s3-eu-west-1.amazonaws.com/tpd/logos/62a6277627ee655c1226b624/0x0.png"
                        alt="logo"
                      />
                    </Col>
                    <Col xs="10">
                      <p>Epicode</p>
                      <p>549.000 followers</p>
                      <Button
                        className=" border border-black mb-3"
                        variant=" outline-dark"
                      >
                        ✔️ Già segui
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col xs="12" md="6">
                  <Row>
                    <Col xs="1">
                      <img
                        className=" w-100"
                        src="https://i0.wp.com/oxforduniversitytours.co.uk/wp-content/uploads/2023/09/Coat_of_arms_of_the_University_of_Oxford.svg_.png?fit=1024%2C1197&ssl=1"
                        alt="logo"
                      />
                    </Col>
                    <Col xs="10">
                      <p>Oxford University</p>
                      <p>12.000 followers</p>
                      <Button
                        className=" border border-black mb-3"
                        variant=" outline-dark"
                      >
                        ✔️ Già segui
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
};

export default Interessi;
