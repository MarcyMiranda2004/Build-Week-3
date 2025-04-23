import { Button, Image } from "react-bootstrap";

interface UserCardProps {
  name: string;
  title: string;
  avatarUrl: string;
}

const UserCard = function ({ name, title, avatarUrl }: UserCardProps) {
  return (
    <div className="d-flex align-items-start mb-2 border-bottom border-1 border-secondary">
      <Image
        src={avatarUrl}
        roundedCircle
        style={{ width: "48px", height: "48px", objectFit: "cover" }}
        className="me-2"
      />
      <div className="flex-grow-1">
        <div className="fw-semibold">{name}</div>
        <div className="text-muted small">{title}</div>
        <Button
          variant="light"
          size="sm"
          className="mt-1 rounded-pill text-dark border border-2 border-dark mb-3"
        >
          <i className="bi bi-person-fill-add me-1 "></i> Collegati
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
