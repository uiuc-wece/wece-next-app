import React from "react";
// import { useRouter } from "next/router";
import styles from "../../styles/Nav.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from 'next/image';

const OutreachNavBar = ({ background_color2 = "#9D9DFF" }) => {

  // const router = useRouter();

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
            <Image
              src="/../../imgs/wece-logo-h-white.png"
              height="30px"
              alt="wece-logo-white"
            />
          </Navbar.Brand>
          <Nav className={styles["left-navbar-imgs"]}>
            
           
          </Nav>
        </div>
        <Navbar.Toggle className={styles["custom-toggler"]} />
        <Navbar.Collapse className={"justify-content-end"}>
          <Nav className={styles["right-navbar"]}>
            <Nav.Link href="/events">Events</Nav.Link>
           
 

            <NavDropdown title="Sponsors">
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
            </NavDropdown>
           
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default OutreachNavBar;