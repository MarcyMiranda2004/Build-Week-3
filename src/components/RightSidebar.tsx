import { Card, Col } from "react-bootstrap";
import UsersConnection from "./UsersConnection";
import { useNavigate } from "react-router-dom";

interface RightSidebarProps {
  onUserClick: (userId: string) => void;
}

const RightSidebar = () => {
  const navigate = useNavigate();

  const handleUserClick = (userId: string) => {
    navigate(`/profile/${userId}`);
  };
  return (
    <Col className="d-none d-md-block mt-3">
      <Card className="mb-3 shadow-sm">
        <Card.Body className="p-3">
          <div className="d-flex justify-content-between">
            <div>
              <div className="text-muted small fw-bold  d-flex flex-row">
                <p>Lingua del profilo</p>
                <i className="bi bi-pencil "></i>
              </div>
              <div>Italiano</div>
            </div>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <div>
              <div className="text-muted small fw-bold d-flex flex-row ">
                <p>Profilo pubblico e URL</p>
                <i className="bi bi-pencil"></i>
              </div>
              <div>
                <p>https://linkedin.com/in/marcello-miranda</p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>

      <UsersConnection onUserClick={handleUserClick} />
    </Col>
  );
};

export default RightSidebar;
