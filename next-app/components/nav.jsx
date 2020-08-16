import styles from "../styles/Nav.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function CustomNavbar() {
  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        fixed="top"
        className={styles["navbar"]}
      >
        <div className={styles["left-navbar"]}>
          <Navbar.Brand href="index.html" className={styles["wece-brand"]}>
            <img
              src="imgs/wece-logo-h-white.png"
              height="30px"
              alt="wece-logo-white"
            />
          </Navbar.Brand>
          <Nav className={styles["left-navbar-imgs"]}>
            <Nav.Link
              className={styles["left-navbar-link"]}
              href="mailto:wece.uiuc@gmail.com"
            >
              <img
                className={styles["nav-img"]}
                src="imgs/mail.png"
                height="25px"
                alt="email"
              />
            </Nav.Link>
            <Nav.Link
              className={styles["left-navbar-link"]}
              href="https://www.facebook.com/wece.uiuc"
              target="_blank"
            >
              <img
                className={styles["nav-img"]}
                src="imgs/facebook.png"
                height="25px"
                alt="facebook"
              />
            </Nav.Link>
            <Nav.Link
              className={styles["left-navbar-link"]}
              href="https://www.instagram.com/wece.uiuc/"
              target="_blank"
            >
              <img
                className={styles["nav-img"]}
                src="imgs/instagram.png"
                height="25px"
                alt="instagram"
              />
            </Nav.Link>
          </Nav>
        </div>
        <Navbar.Toggle className={styles["custom-toggler"]} />
        <Navbar.Collapse className={"justify-content-end"}>
          <Nav className={styles["right-navbar"]}>
            <NavDropdown title="About">
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="about.html"
              >
                Who We Are
              </NavDropdown.Item>
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="board.html"
              >
                Board Members
              </NavDropdown.Item>
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="committees.html"
              >
                Committees
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="events.html">Events</Nav.Link>
            <NavDropdown title="Sponsors">
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="sponsors.html"
              >
                2018-19
              </NavDropdown.Item>
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="resumebook.html"
              >
                Resume Book
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="contactus.html">Contact Us</Nav.Link>
            <Nav.Link href="join.html">Join</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}