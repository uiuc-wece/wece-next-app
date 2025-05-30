import React from "react";
//import { useSelector } from "react-redux";
//import { useRouter } from "next/router";
import styles from "../styles/Nav.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
//import { logout } from "../apihelper.js";

const CustomNavbar = (
  // { background_color2 = "#9D9DFF" }
  { background_color2 = "#2D1F3E" }

) => {
  //const authenticated = useSelector((state) => state.authenticated);
  //const firstName = useSelector((state) => state.firstName);

  //const router = useRouter();
  // const logoutUser = () => {
  //   logout();
  //   router.push("/");
  // };
  
  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        fixed="top"
        className={styles["navbar"]}
        style={{ backgroundColor: background_color2 }}
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
              href="https://discord.gg/9kM3XCE4gH"
              target="_blank"
            >
              <img
                className={styles["nav-img"]}
                src="imgs/discord-logo.png"
                height="25px"
                alt="discord"
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
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/advisors"
              >
                Advisors
              </NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="/events">Events</Nav.Link>
            <NavDropdown title="Member Resources">
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/gmslides"
              >
                GM Slides
              </NavDropdown.Item>
              {/* <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/newsletters"
              >
                Newsletters
              </NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown title="Sponsors">
              <NavDropdown.Item
               className={styles["dropdown-item"]}
               href="/sponsors24"
              >
                2024-25
              </NavDropdown.Item>
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/sponsors23"
              >
                2023-24
              </NavDropdown.Item>
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/sponsors22"
              >
                2022-23
              </NavDropdown.Item>
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/sponsors21"
              >
                2021-22
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            {/* <Nav.Link href="/join">Join</Nav.Link> */}
            {/* {!authenticated && (
              <Nav.Link href="/login" className={styles["login"]}>
                Login
              </Nav.Link>
            )}
            {authenticated && (
              <NavDropdown
                title="Account"
                className={styles["account-dropdown"]}
              >
                <NavDropdown.ItemText className={styles["dropdown-item-text"]}>
                  {"Welcome " + firstName + "!"}
                </NavDropdown.ItemText>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className={styles["dropdown-item"]}
                  href="/account"
                >
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  className={styles["dropdown-item"]}
                  onClick={logoutUser}
                >
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            )} */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;