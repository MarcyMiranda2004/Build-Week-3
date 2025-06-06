import React, { useEffect, useState } from "react";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Image,
  Dropdown,
  DropdownHeader,
  InputGroup,
} from "react-bootstrap";
import {
  HouseDoorFill,
  PeopleFill,
  BriefcaseFill,
  ChatDotsFill,
  BellFill,
  Grid3x3GapFill,
  Search,
} from "react-bootstrap-icons";
import "../style/navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../style/user.css";

const LinkedInNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showStickyProfile, setShowStickyProfile] = useState(false);

  const handleScroll = () => {
    const y = window.scrollY;
    setIsScrolled(y > 1);
    setShowStickyProfile(y > 300);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("recentSearches");
    if (saved) setRecentSearches(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);

  const navigate = useNavigate();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    if (!trimmed) return;

    if (!recentSearches.includes(trimmed)) {
      setRecentSearches((prev) => [trimmed, ...prev.slice(0, 4)]);
    }

    setSearchTerm("");
    navigate(`/jobs?search=${encodeURIComponent(trimmed)}`);
  };

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Navbar
        bg="white"
        expand="md"
        className={`navbar ${
          isScrolled ? "navbar-scrolled" : ""
        } p-0 py-sm-2 pt-lg-0`}
        sticky="top"
      >
        <Container className="d-flex">
          <div className="d-flex gap-2 position-relative">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              width={35}
              height={35}
              alt="LinkedIn"
              style={{ marginTop: "2px" }}
            />

            <Form
              onSubmit={handleSearchSubmit}
              className="mb-3 mb-md-0 position-relative"
            >
              <InputGroup
                className={`search-bar ${searchFocused ? "expanded" : ""}`}
              >
                <InputGroup.Text className="bg-secondary-subtle border-end-0 p-2">
                  <Search size={14} />
                </InputGroup.Text>
                <FormControl
                  type="search"
                  placeholder="Cerca"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-secondary-subtle border-start-0 ps-0 search"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 150)}
                />
              </InputGroup>
              {searchFocused && recentSearches.length > 0 && (
                <div className="search-dropdown position-absolute bg-white shadow-sm rounded mt-1 w-100 z-3 p-1">
                  <div className="px-3 py-2 text-muted small">
                    Ricerche recenti
                  </div>
                  {recentSearches.map((item, index) => (
                    <div
                      key={index}
                      className="px-3 py-2 hover-bg cronologia cursor-pointer"
                    >
                      <Search size={12} /> {item}
                    </div>
                  ))}
                </div>
              )}
            </Form>
          </div>

          <Navbar.Toggle aria-controls="main-navbar-collapse" />
          <Navbar.Collapse id="main-navbar-collapse">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-between w-100 mt-3 mt-md-0">
              <Nav className="d-flex align-items-center justify-content-center flex-grow-1 gap-3 flex-wrap">
                <Link
                  to="/"
                  className={`text-center small mx-2 text-decoration-none text-dark pb-1 ${
                    isActive("/") ? "border-bottom border-3 border-primary" : ""
                  }`}
                >
                  <HouseDoorFill size={20} className="text-lk-tertiary" />
                  <div>Home</div>
                </Link>

                <Link
                  to="/rete"
                  className={`text-center small mx-2 text-decoration-none text-dark pb-1 ${
                    isActive("/rete")
                      ? "border-bottom border-3 border-primary"
                      : ""
                  }`}
                >
                  <PeopleFill size={20} className="text-lk-tertiary" />
                  <div>Rete</div>
                </Link>

                <Link
                  to="/jobs"
                  className={`text-center small mx-2 text-decoration-none text-dark pb-1 ${
                    isActive("/jobs")
                      ? "border-bottom border-3 border-primary"
                      : ""
                  }`}
                >
                  <BriefcaseFill size={20} className="text-lk-tertiary" />
                  <div>Lavoro</div>
                </Link>

                <Link
                  to="/messaggi"
                  className={`text-center small mx-2 text-decoration-none text-dark pb-1 ${
                    isActive("/messaggi")
                      ? "border-bottom border-3 border-lk-primary"
                      : ""
                  }`}
                >
                  <ChatDotsFill size={20} className="text-lk-tertiary" />
                  <div>Messaggistica</div>
                </Link>

                <Link
                  to="/notifiche"
                  className={`text-center small mx-2 text-decoration-none text-dark pb-1 ${
                    isActive("/notifiche")
                      ? "border-bottom border-3 border-primary"
                      : ""
                  }`}
                >
                  <BellFill size={20} className="text-lk-tertiary" />
                  <div>Notifiche</div>
                </Link>

                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="link"
                    className="p-0 d-flex flex-column align-items-center text-decoration-none text-dark"
                  >
                    <Image
                      src="https://placehold.co/32x32"
                      roundedCircle
                      width={23}
                      height={23}
                      alt="Tu"
                    />
                    <DropdownHeader>Tu</DropdownHeader>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>Profilo</Dropdown.Item>
                    <Dropdown.Item>Impostazioni</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Esci</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>

                <div className="border-start">
                  <Dropdown align="end" className="ps-2 m-0">
                    <Dropdown.Toggle
                      variant="link"
                      className="p-0 d-flex flex-column align-items-center text-decoration-none text-dark"
                    >
                      <Grid3x3GapFill size={20} />
                      <div>Per le aziende</div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Talent Solutions</Dropdown.Item>
                      <Dropdown.Item>Marketing Solutions</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {showStickyProfile && (
        <div className="sticky-top bg-white border-bottom shadow-sm py-2 px-3 d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-2">
            <Image
              src="https://placehold.co/40x40"
              roundedCircle
              alt="Profile"
              width={40}
              height={40}
            />
            <div>
              <div className="fw-bold">Team6 for Epicode</div>
              <div className="text-muted small">ID: 123456</div>
            </div>
          </div>
          <div className="d-flex gap-2">
            <Button className="btn bg-lk-primary disponibile rounded-5 text-light">
              Disponibile per
            </Button>
            <Button className="btn btn-outline-lk-primary rounded-5 text-lk-primary fw-semibold bg-transparent otherButton">
              Aggiungi sezione del profilo
            </Button>
            <Button className="btn btn-outline-lk-secondary rounded-5 text-lk-primary fw-semibold bg-transparent otherButton">
              Migliora profilo
            </Button>
            <Button className="btn btn-light rounded-5 border-black">
              Risorse
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default LinkedInNavbar;
