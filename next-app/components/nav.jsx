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
          <Navbar.Brand href="/" className={styles["wece-brand"]}>
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
                href="/about"
              >
                Who We Are
              </NavDropdown.Item>
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/board"
              >
                Board Members
              </NavDropdown.Item>
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/committees"
              >
                Committees
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/calendar">Events</Nav.Link>
            <NavDropdown title="Sponsors">
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/sponsors"
              >
                2018-19
              </NavDropdown.Item>
              {/* <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/resumebook"
              >
                Resume Book
              </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            <Nav.Link href="/join">Join</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
