/* eslint-disable react/prop-types */

import React from "react";
// import { useSelector } from "react-redux";
import styles from "../styles/WECEHacks.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import { NavDropdown } from "react-bootstrap";
import Image from 'next/image';

// this changes the color of the navbar
const WECEHacksNav = ({ background_color2 = "transparent" }) => {
  return (
    <>
      <Navbar
        variant="dark"
        expand="lg"
        sticky="bottom"
        className={styles["nav-wece-hacks"]}
        style={{ backgroundColor: background_color2 }}
      >
        <div className={styles["left-navbar"]}>
          <Navbar.Brand href="/" className={styles["wece-brand"]}>
            <Image
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
            <Nav.Link href="/schedule">Schedule</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default WECEHacksNav;
