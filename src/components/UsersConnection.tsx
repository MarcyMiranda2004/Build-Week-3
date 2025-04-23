import { useEffect, useState } from "react";
import { Spinner, Card } from "react-bootstrap";
import UserCard from "./UserCard";

const API_URL = "https://striveschool-api.herokuapp.com/api/profile/";
const myAuthentication: string =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODA3NjU3OWQ0NTE4MTAwMTVjZTgzZDciLCJpYXQiOjE3NDUzMTUxOTMsImV4cCI6MTc0NjUyNDc5M30.LvZeb9a9HfdVRsXZOEB03R-JzzhKzeXhAhzL8N5jqsM";

interface ProfileSuggestion {
  _id: string;
  name: string;
  surname: string;
  title: string;
  image: string;
}

const UsersConnection = function ({
  onUserClick,
}: {
  onUserClick: (userId: string) => void;
}) {
  const [suggestions, setSuggestions] = useState<ProfileSuggestion[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${myAuthentication}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella risposta del server");
        }
      })
      .then((data: ProfileSuggestion[]) => {
        const randomSuggestions = data
          .sort(() => 0.5 - Math.random())
          .slice(0, 5);
        setSuggestions(randomSuggestions);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Errore durante la fetch:", error);
      });
  }, []);

  return (
    <Card className="bg-light">
      <Card.Header className="fw-bold">
        Persone che potresti conoscere
        <div className="text-muted small mb-2">Dal tuo settore</div>
      </Card.Header>
      <Card.Body className="pt-2">
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" size="sm" />
          </div>
        ) : (
          suggestions.map((user) => (
            <UserCard
              key={user._id}
              name={`${user.name} ${user.surname}`}
              title={user.title}
              avatarUrl={user.image}
              onClick={() => onUserClick(user._id)}
            />
          ))
        )}
      </Card.Body>
    </Card>
  );
};

export default UsersConnection;
