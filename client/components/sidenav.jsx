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
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { logout } from "../apihelper.js";

const SideNavbar = () => {
  const [active, setActive] = useState(false);
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const profileImage = useSelector((state) => state.profileImage);

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
            {active ? (
              ""
            ) : (
              <Image
                className={styles["profile-img"]}
                src={profileImage}
                roundedCircle
              />
            )}
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
            {active ? "" : <p>Collapse</p>}
          </Nav.Link>
          <Nav.Link className={styles["menu-item"]} href="/account">
            <BiHomeAlt /> {active ? "" : <p>Home</p>}
          </Nav.Link>
          <Nav.Link className={styles["menu-item"]} href="/profile">
            <BiUserCircle /> {active ? "" : <p>Profile</p>}
          </Nav.Link>
          <Nav.Link className={styles["menu-item"]} onClick={logoutUser}>
            <BiLogOutCircle /> {active ? "" : <p>Logout</p>}
          </Nav.Link>
        </div>
      </Navbar>
    </>
  );
};

export default SideNavbar;