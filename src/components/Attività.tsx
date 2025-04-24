import "../style/ConsigliatiAnalisiAttività.css";
import { Container, Button, Modal } from "react-bootstrap";
import { useState, useEffect, useRef, ChangeEvent } from "react";
import {
  Pencil,
  ArrowRight,
  EmojiSmile,
  CardImage,
  Calendar,
  Asterisk,
  PlusLg,
  Clock,
  Trash,
} from "react-bootstrap-icons";

interface Post {
  id: number;
  content: string;
  date: string;
  image?: string | null;
}

const Attività = () => {
  const [show, setShow] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostText, setNewPostText] = useState<string>("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const imageInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const storedPosts = localStorage.getItem("userPosts");
    if (storedPosts) {
      setPosts(JSON.parse(storedPosts));
    }
  }, []);

  const handleClose = () => {
    setShow(false);
    setNewPostText("");
    setImagePreview(null);
  };

  const handleShow = () => setShow(true);

  const handlePublish = () => {
    if (!newPostText.trim() && !imagePreview) return;

    const newPost: Post = {
      id: Date.now(),
      content: newPostText.trim(),
      date: new Date().toLocaleString(),
      image: imagePreview,
    };

    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem("userPosts", JSON.stringify(updatedPosts));
    handleClose();
  };

  const handleImageClick = () => {
    imageInputRef.current?.click();
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setImagePreview(imageURL);
    }
  };

  const handleDeletePost = (id: number) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("userPosts", JSON.stringify(updatedPosts));
  };

  return (
    <>
      {/* Modale per aggiungere un commento */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="d-flex modalProfile rounded-4 p-3 pb-1">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541"
              alt="user_img"
              className="rounded-circle"
              style={{ width: "60px", height: "60px" }}
            />
            <div className="ms-3">
              <h4 className="lh-1">Nome Utente</h4>
              <p className="fs-6 lh-1">Pubblica: Chiunque</p>
            </div>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="pt-1">
          <textarea
            id="myTextArea"
            rows={8}
            cols={50}
            placeholder="Di Cosa vorresti parlare ?"
            className="form-control border-0"
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
          />
          <EmojiSmile className="fw-semibold cursor-pointer mt-2" size={20} />
          <div className="d-flex mt-3 align-items-center">
            <CardImage
              className="text-lk-tertiary me-3 cursor-pointer"
              size={20}
              onClick={handleImageClick}
            />
            <Calendar
              className="text-lk-tertiary mx-3 cursor-pointer"
              size={20}
            />
            <Asterisk
              className="text-lk-tertiary mx-3 cursor-pointer"
              size={20}
            />
            <PlusLg
              className="text-lk-tertiary mx-3 cursor-pointer"
              size={20}
            />
            <input
              type="file"
              accept="image/*"
              ref={imageInputRef}
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
          </div>

          {imagePreview && (
            <div className="mt-3">
              <img
                src={imagePreview}
                alt="Anteprima"
                className="img-fluid rounded"
                style={{ maxHeight: "200px" }}
              />
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Clock size={20} className="me-2 cursor-pointer" />
          <Button
            variant="primary"
            onClick={handlePublish}
            className="rounded-pill px-4 fw-semibold bg-lk-primary text-white publicPost"
          >
            Pubblica
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Main del componente */}
      <Container className="border border-1 rounded-3 border-lk-light mt-2 mb-1 bg-lk-secondary p-0">
        <div className="p-4 pb-0">
          <div className="d-flex justify-content-between">
            <h4 className="lh-1">Attività</h4>
            <div>
              <Button
                className="border border-1 border-primary p-1 px-3 rounded-pill text-lk-primary fw-semibold me-3 addPost bg-transparent"
                onClick={handleShow}
              >
                Crea un Post
              </Button>
              <Pencil size={20} className="fw-bold cursor-pointer" />
            </div>
          </div>

          <p className="text-lk-primary lh-1 fw-semibold">4 Follower</p>

          {posts.length === 0 ? (
            <>
              <strong>Non hai ancora pubblicato nulla</strong>
              <p>I post che condividi appariranno qui</p>
            </>
          ) : (
            <div className="mt-3">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-3 p-3 mb-3 border border-lk-light position-relative d-flex flex-column"
                >
                  {post.content && <p className="mb-1">{post.content}</p>}
                  {post.image && (
                    <img
                      src={post.image}
                      alt="Post"
                      className="img-fluid rounded mb-2"
                      style={{ maxHeight: "200px", maxWidth: "200px" }}
                    />
                  )}
                  <small className="text-muted">{post.date}</small>
                  <Trash
                    size={18}
                    className="position-absolute top-0 end-0 m-2 text-danger cursor-pointer"
                    onClick={() => handleDeletePost(post.id)}
                    title="Elimina post"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <a className="text-decoration-none text-lk-tertiary d-flex justify-content-center align-items-center border-top border-1 border-lk-light mt-2 p-2 showAnalisi">
          <span className="fw-semibold me-2">Mostra tutte le attività </span>
          <ArrowRight className="text-lk-tertiary" size={16} />
        </a>
      </Container>
    </>
  );
};

export default Attività;
