/* eslint-disable react/prop-types */

import React from "react";
// import { useSelector } from "react-redux";
import styles from "../styles/WECEHacks.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
<<<<<<< HEAD
import NavDropdown from "react-bootstrap/NavDropdown";
=======
import { NavDropdown } from "react-bootstrap";
>>>>>>> a65bda2757d5d7856c2d8f811b9f2b5424d45a77

// this changes the color of the navbar
const WECEHacksNav = ({ background_color2 = "transparent" }) => {
  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
<<<<<<< HEAD
        fixed="top"
=======
        sticky="bottom"
>>>>>>> a65bda2757d5d7856c2d8f811b9f2b5424d45a77
        className={styles["nav-wece-hacks"]}
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
          <Nav className={styles["left-navbar-imgs"]}></Nav>
        </div>
        <Navbar.Toggle className={styles["custom-toggler"]} />
        <Navbar.Collapse className={"justify-content-end"}>
          <Nav className={styles["right-navbar"]}>
            {/* <Nav.Link href="/events">Events</Nav.Link> */}
<<<<<<< HEAD

            {/* <NavDropdown title="Sponsors">
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/sponsors22"
              >
                2022-23
              </NavDropdown.Item>
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/sponsors22"
              >
                2021-22
              </NavDropdown.Item>
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/sponsors21"
              >
                2020-21
              </NavDropdown.Item>
              <NavDropdown.Item
                className={styles["dropdown-item"]}
                href="/sponsors"
              >
                2018-19
              </NavDropdown.Item>
            </NavDropdown> */}
=======
            <Nav.Link href="/schedule">Schedule</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
>>>>>>> a65bda2757d5d7856c2d8f811b9f2b5424d45a77
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default WECEHacksNav;
