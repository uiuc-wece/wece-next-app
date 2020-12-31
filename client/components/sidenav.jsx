import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  BiLeftArrow,
  BiRightArrow,
  BiLogOutCircle,
  BiUserCircle,
  BiHomeAlt,
} from "react-icons/bi";
import styles from "../styles/Sidenav.module.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { logout } from "../apihelper.js";

const SideNavbar = () => {
  const [active, setActive] = useState(false);
  const authenticated = useSelector((state) => state.authenticated);
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);

  const router = useRouter();
  const logoutUser = () => {
    logout();
    router.push("/");
  };

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        if (window.innerWidth < 750) {
          setActive(true);
        } else {
          setActive(false);
        }
      },
      false
    );
  }, [active]);

  return (
    <>
      <Navbar
        variant="dark"
        className={
          active
            ? `flex-column ${styles["side-nav"]} ${styles["active"]}`
            : `flex-column ${styles["side-nav"]}`
        }
      >
        <div className={styles["profile"]}>
          <Nav.Item className={styles["profile-pic"]}>
            {active ? "" : <BiUserCircle />}
          </Nav.Item>
          <Nav.Item className={styles["name"]}>
            {active ? "" : `${firstName} ${lastName}`}
          </Nav.Item>
        </div>
        <div className={styles["menu"]}>
          <Nav.Link
            className={`${styles["toggle"]} ${styles["menu-item"]}`}
            onClick={toggleActive}
          >
            {active ? <BiRightArrow /> : <BiLeftArrow />}{" "}
            {active ? "" : "Collapse"}
          </Nav.Link>
          <Nav.Link className={styles["menu-item"]} href="/account">
            <BiHomeAlt /> {active ? "" : "Home"}
          </Nav.Link>
          <Nav.Link className={styles["menu-item"]} onClick={logoutUser}>
            <BiLogOutCircle /> {active ? "" : "Logout"}
          </Nav.Link>
        </div>
      </Navbar>
    </>
  );
};

export default SideNavbar;
