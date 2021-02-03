import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  BiLeftArrow,
  BiRightArrow,
  BiLogOutCircle,
  BiUserCircle,
  BiHomeAlt,
} from "react-icons/bi";
import {
  FaRegCalendarAlt,
  FaRegCalendarCheck,
  FaRegCalendarPlus,
} from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiAdminLine } from "react-icons/ri";
import styles from "../styles/Sidenav.module.css";
import Accordion from "react-bootstrap/Accordion";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { logout } from "../apihelper.js";

const SideNavbar = () => {
  const [active, setActive] = useState(false);
  const firstName = useSelector((state) => state.firstName);
  const lastName = useSelector((state) => state.lastName);
  const profileImage = useSelector((state) => state.profileImage);
  const accountType = useSelector((state) => state.accountType);
  const firstRender = useRef(true);

  const router = useRouter();
  const logoutUser = () => {
    logout();
    router.push("/");
  };

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (firstRender.current) {
      if (window.innerWidth < 750) {
        setActive(true);
      }
      firstRender.current = false;
    }
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
          <hr className={styles["nav-divider"]} />
          <Nav.Link className={styles["menu-item"]} href="/account">
            <BiHomeAlt /> {active ? "" : <p>Home</p>}
          </Nav.Link>
          <Nav.Link className={styles["menu-item"]} href="/profile">
            <BiUserCircle /> {active ? "" : <p>Profile</p>}
          </Nav.Link>
          <Nav.Link className={styles["menu-item"]} href="/myevents">
            <FaRegCalendarCheck /> {active ? "" : <p>My Events</p>}
          </Nav.Link>
          <hr className={styles["nav-divider"]} />
          {accountType === "ADMIN" ||
          accountType === "BOARD" ||
          accountType === "CHAIR" ? (
            <Accordion className={styles["accordion"]}>
              <Accordion.Toggle className={styles["menu-item"]} eventKey="0">
                <RiAdminLine />
                {active ? "" : <p>Admin Tools</p>}
              </Accordion.Toggle>
              <Accordion.Collapse
                className={styles["accordion-collapse"]}
                eventKey="0"
              >
                <Nav className={`flex-column ${styles["accordion-nav"]}`}>
                  {accountType === "ADMIN" || accountType === "BOARD" ? (
                    <Nav.Link
                      className={`${styles["menu-item"]} ${styles["collapse-item"]}`}
                      href="/members"
                    >
                      <FiUsers /> {active ? "" : <p>Members</p>}
                    </Nav.Link>
                  ) : (
                    ""
                  )}
                  {accountType === "ADMIN" ? (
                    <Nav.Link
                      className={`${styles["menu-item"]} ${styles["collapse-item"]}`}
                      href="/events"
                    >
                      <FaRegCalendarAlt /> {active ? "" : <p>Events</p>}
                    </Nav.Link>
                  ) : (
                    ""
                  )}
                  <Nav.Link
                    className={`${styles["menu-item"]} ${styles["collapse-item"]}`}
                    href="/eventmanager"
                  >
                    <FaRegCalendarPlus /> {active ? "" : <p>Event Manager</p>}
                  </Nav.Link>
                </Nav>
              </Accordion.Collapse>
            </Accordion>
          ) : (
            ""
          )}
          {accountType === "ADMIN" || accountType === "BOARD" ? (
            <hr className={styles["nav-divider"]} />
          ) : (
            ""
          )}
          <Nav.Link className={styles["menu-item"]} onClick={logoutUser}>
            <BiLogOutCircle /> {active ? "" : <p>Logout</p>}
          </Nav.Link>
        </div>
      </Navbar>
    </>
  );
};

export default SideNavbar;
