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

const LinkedInNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [showStickyProfile, setShowStickyProfile] = useState(false);


  const handleScroll = () => {
    const y = window.scrollY
    setIsScrolled(y > 1);
    setShowStickyProfile(y > 300)
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

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    if (!recentSearches.includes(searchTerm)) {
      setRecentSearches((prev) => [searchTerm, ...prev.slice(0, 4)]);
    }
    setSearchTerm("");
  };

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
              <div className="text-center small cursor-pointer mx-2">
                <HouseDoorFill size={20} className="text-lk-tertiary" />
                <div>Home</div>
              </div>
              <div className="text-center small cursor-pointer mx-2">
                <PeopleFill size={20} className="text-lk-tertiary" />
                <div>Rete</div>
              </div>
              <div className="text-center small cursor-pointer mx-2">
                <BriefcaseFill size={20} className="text-lk-tertiary" />
                <div>Lavoro</div>
              </div>
              <div className="text-center small cursor-pointer mx-2">
                <ChatDotsFill size={20} className="text-lk-tertiary" />
                <div>Messaggistica</div>
              </div>
              <div className="text-center small position-relative cursor-pointer mx-2">
                <BellFill size={20} className="text-lk-tertiary" />
                <div>Notifiche</div>
              </div>

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
          <Button className="btn btn-outline-lk-primary border-1 rounded-5 border-lk-primary otherButton bg-transparent text-lk-primary fw-semibold">
            Aggiungi sezione del profilo
          </Button>
          <Button className="btn btn-outline-lk-secondary border-1 rounded-5 border-lk-primary otherButton bg-transparent text-lk-primary fw-semibold">
            Migliora profilo
          </Button>
          <Button className="btn btn-light border-1 border-black rounded-5 risorse bg-transparent">
            Risorse
          </Button>
    </div>
    </div>
    )}
    </>
  );
};

export default LinkedInNavbar;
