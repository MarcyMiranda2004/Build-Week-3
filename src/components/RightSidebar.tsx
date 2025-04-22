import { Card, Col } from "react-bootstrap";
import UsersConnection from "./UsersConnection";

interface RightSidebarProps {
  language: string;
  publicUrl: string;
}

const RightSidebar = function ({ language, publicUrl }: RightSidebarProps) {
  return (
    <Col
      md={2}
      className="d-none d-md-block mt-3"
      style={{ position: "sticky", top: "70px" }}
    >
      <Card className="mb-3 shadow-sm">
        <Card.Body className="p-3">
          <div className="d-flex justify-content-between">
            <div>
              <div className="text-muted small fw-bold">
                Lingua del profilo <i className="bi bi-pencil"></i>
              </div>
              <div>{language}</div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <div className="text-muted small fw-bold">
                Profilo pubblico e URL
                <i className="bi bi-pencil"></i>
              </div>
              <div className="text-truncate" style={{ maxWidth: 180 }}>
                {publicUrl}
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      <UsersConnection />
    </Col>
  );
};

export default RightSidebar;
