import { Container, Nav, NavItem, Navbar } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

const NavBar = ({ logo, avatar }) => {
    const location = useLocation();
    console.log("LOCATION", location);
    const isValidLocation =
        location.pathname === "/" ||
        location.pathname === "/Tv-Shows" ||
        location.pathname.startsWith("/movie-details/");
    if (isValidLocation) {
        return (
            <header>
                <Navbar expand="lg">
                    <Container fluid className="px-0">
                        <Navbar.Brand href="#" className="">
                            <img src={logo} alt="Netflix Logo" style={{ width: "100px" }} />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse className="basic-navbar-nav justify-content-between">
                            <Nav>
                                <NavLink to="/" className="nav-link text-white fw-normal" href="#">
                                    Home
                                </NavLink>
                                <NavLink to="/Tv-Shows" className="nav-link text-white fw-normal" href="#">
                                    Tv Shows
                                </NavLink>
                                <NavLink className="nav-link text-white fw-normal" href="#">
                                    Movies
                                </NavLink>
                                <NavLink className="nav-link text-white fw-normal" href="#">
                                    Recently Added
                                </NavLink>
                                <NavLink className="nav-link text-white fw-normal" href="#">
                                    My List
                                </NavLink>
                            </Nav>
                            <div className="d-none d-lg-flex align-items-center" role="search">
                                <Nav className="ms-auto">
                                    <NavItem className="d-flex align-items-center">
                                        <Nav.Link>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-search text-white"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                            </svg>
                                        </Nav.Link>
                                    </NavItem>
                                    <NavItem className="d-flex align-items-center">
                                        <Nav.Link className="text-white" href="#">
                                            KIDS
                                        </Nav.Link>
                                    </NavItem>
                                    <NavItem className="d-flex align-items-center">
                                        <Nav.Link className="text-white " href="#">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                className="bi bi-bell-fill"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
                                            </svg>
                                        </Nav.Link>
                                    </NavItem>
                                    <li className="nav-item dropdown d-flex">
                                        <a
                                            className="nav-link dropdown-toggle text-white d-flex align-items-center"
                                            href="#"
                                            role="button"
                                            databstoggle="dropdown"
                                            ariaexpanded="false"
                                        >
                                            <img src={avatar} alt="" width="30px" />
                                        </a>
                                        <ul className="dropdown-menu bg-dark top-100 dropdown-menu-end">
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <img src={avatar} alt="" width="30px" />
                                                    <span className="ms-2 text-white">Utente 1</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="dropdown-item" href="#">
                                                    <img src={avatar} alt="" width="30px" />
                                                    <span className="ms-2 text-white">Utente 2</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                </Nav>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
};
export default NavBar;
