import { Link, Element, scrollSpy } from "react-scroll";
import { ReactTypeformEmbed } from "react-typeform-embed";
import { useEffect, useState, useCallback } from "react";
import WECEHacksLayout from "../components/wecehacksLayout";
import styles from "../styles/WECEHacks.module.css";

import Button from "react-bootstrap/Button";
import CustomCursor from "custom-cursor-react";
import "custom-cursor-react/dist/index.css";
import { BiRightArrowCircle } from "react-icons/bi";

export default function WECEHacks() {
  const [typeForm, setTypeForm] = useState(null);

  useEffect(() => {
    scrollSpy.update();
  }, []);

  const typeFormRef = useCallback((tf) => {
    console.log(tf);
    if (tf !== null) {
      setTypeForm(tf);
    }
  }, []);

  const openForm = () => {
    console.log("click");
    if (typeForm) {
      typeForm.typeform.open();
    }
  };

  return (
    <WECEHacksLayout background_color="#A890FE">

      <CustomCursor // custom cursor component 
        customClass={styles["cursor"]}
        targets={["#nav", "#button"]}
        targetScale={2}
        dimensions={8}
        strokeColor="#c68fca"
        strokeWidth={8}
        fill="#6fb183"
        smoothness={{ movement: 1, scale: 0.6, opacity: 0.8 }}
        opacity={1}
      />
      {/* <div className={styles["wece-hacks-wrapper"]}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzmXRpaYpndoNDi_EhmQT3pSJk3793_6XBkAPYIU_bzbJWdg/viewform?usp=sf_link">
          <div className={styles["wece-hacks-content"]}>
            <div className={styles["wece-hacks-text"]}>
              Volunteer to be a mentor or judge for the hackathon here!
            </div>
            <div className={styles["wece-hacks-icon"]}>
              <BiRightArrowCircle />
            </div>
          </div>
        </a>
  </div> */}
      
      <div id="nav" className={styles["side-nav"]}>
        <Link
          to="home"
          activeClass={styles["active"]}
          spy={true}
          smooth={true}
          duration={500}
          tabIndex="1"
          className={styles["side-nav-item"]}
        >
          <p>Home</p>
          <div className={styles["circle"]} />
        </Link>
        <Link
          to="about"
          activeClass={styles["active"]}
          spy={true}
          smooth={true}
          duration={500}
          tabIndex="2"
          className={styles["side-nav-item"]}
        >
          <p>About</p>
          <div className={styles["circle"]} />
        </Link>
        <Link
          to="schedule"
          activeClass={styles["active"]}
          spy={true}
          smooth={true}
          duration={500}
          tabIndex="3"
          className={styles["side-nav-item"]}
        >
          <p>Schedule</p>
          <div className={styles["circle"]} />
        </Link>
        <Link
          to="signup"
          activeClass={styles["active"]}
          spy={true}
          smooth={true}
          duration={500}
          tabIndex="4"
          className={styles["side-nav-item"]}
        >
          <p>Sign Up</p>
          <div className={styles["circle"]} />
        </Link>
        <Link
          to="themes"
          activeClass={styles["active"]}
          spy={true}
          smooth={true}
          duration={500}
          tabIndex="5"
          className={styles["side-nav-item"]}
        >
        </Link>
        <Link
          to="prizes"
          activeClass={styles["active"]}
          spy={true}
          smooth={true}
          duration={500}
          tabIndex="5"
          className={styles["side-nav-item"]}
        >
          <p>AWARDS</p>
          <div className={styles["circle"]} />
        </Link>
        <Link
          to="faq"
          activeClass={styles["active"]}
          spy={true}
          smooth={true}
          duration={500}
          tabIndex="5"
          className={styles["side-nav-item"]}
        >
          <p>FAQ</p>
          <div className={styles["circle"]} />
        </Link>
      </div>
      <ReactTypeformEmbed
        style={{ display: "none" }}
        popup
        autoOpen={false}
        url="https://1z0014l9lxo.typeform.com/to/zhtdsCmx"
        hideHeaders
        hideFooter
        ref={typeFormRef}
      />
      <div className={styles["pages"]}>
       
        <Element
          name="about"
          className={`${styles["section"]} ${styles["half-screen"]}`}
        >
          <div className={styles["section-content"]}>
            <div className={styles["title"]}>about</div>
            <div className={styles["text-box"]}>
              <p>
              WECE is hosting its returning hackathon WECEHacks.
              </p>
              <div className={styles["about-icon-row"]}>
                <div className={styles["about-icon-wrapper"]}>
                  <div className={styles["about-icon"]}>
                  </div>
                  <div className={styles["about-icon-text"]}>
                    Web and app development!
                  </div>
                </div>
                <div className={styles["about-icon-wrapper"]}>
                  <div className={styles["about-icon"]}>
                    <img src="imgs/motherboard.png"></img>
                  </div>
                  <div className={styles["about-icon-text"]}>
                    Hardware prototyping!
                  </div>
                </div>
                <div className={styles["about-icon-wrapper"]}>
                  <div className={styles["about-icon"]}>
                  </div>
                  <div className={styles["about-icon-text"]}>
                    Free swag!
                  </div>
                </div>
                <div className={styles["about-icon-wrapper"]}>
                  <div className={styles["about-icon"]}>
                  </div>
                  <div className={styles["about-icon-text"]}>
                    Five hackathon prizes!
                  </div>
                </div>
                <div className={styles["about-icon-wrapper"]}>
                  <div className={styles["about-icon"]}>
                  </div>
                  <div className={styles["about-icon-text"]}>
                    ECEB and Discord!
                  </div>
                </div>
                <div className={styles["about-icon-wrapper"]}>
                  <div className={styles["about-icon"]}>
                    <img src="imgs/hackathon.png"></img>
                  </div>
                  <div className={styles["about-icon-text"]}>
                    Upto 3 person teams!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Element>
        <Element
          name="schedule"
          className={`${styles["section"]} ${styles["half-screen"]}`}
        >
          <div className={styles["section-content"]}>
            <div className={styles["title"]}>schedule</div>
            <div className={styles["text-box2"]}>
              <p>
                <b>Saturday</b>
              </p>
              <p>
                <b>9am</b> – wake up
              </p>
              <p>
                <b>9:45am</b> - Workspaces open
              </p>
              <p>
                <b>10am</b> – Workshops start
              </p>
              <p>
                <b>Noon</b> – Lunchtime!
              </p>
              <p>
                <b>7pm</b> – Workspaces close
              </p>
              <br />
              <p>
                <b>Sunday</b>
              </p>
              <p>
                <b>8am</b> - Workspaces open
              </p>
              <p>
                <b>1pm</b> – Submissions Due!
              </p>
              <p>
                <b>1:30pm</b> – Presentations Begin!
              </p>
              <p>
                <b>5pm</b> – Dinner and Awards Ceremony
              </p>
            </div>
          </div>
        </Element>
        <Element
          name="signup"
          className={`${styles["section"]} ${styles["half-screen"]}`}
        >
          <div className={styles["section-content"]}>
            <div className={styles["title"]}>sign up</div>
            <Button
              id="button"
              variant="lights"
              className={styles["button"]}
              onClick={openForm}
            >
              Register now
            </Button>
          </div>
        </Element>
        <Element
          name="themes"
          className={`${styles["section"]} ${styles["half-screen"]}`}
        >
          <div className={styles["section-content"]}>
            <div className={styles["title"]}>themes</div>
            <div className={styles["text-box"]}>
              <p>
                <b> Quality of Life for College Students</b>
              </p>
              <p>Create a project that improves the life of college students. Feel free to be creative!
              </p>
              <div className={styles["about-icon-wrapper2"]}>
                  <div className={styles["about-icon"]}>
                    <img src="imgs/graduated.png"></img>
                  </div>
              </div>
              <br />
              <p>
                <b>Sustainable and Healthy Cities and Communities</b>
              </p>
              <p>
                Create a project focused on one of the <a href="https://sdgs.un.org/goals/goal11">UN Sustainable and Health Development Goals</a>, which is to make cities and human settlements inclusive, safe, resilient, sustainable, and healthy.
              </p>
              <div className={styles["about-icon-wrapper2"]}>
                  <div className={styles["about-icon"]}>
                    <img src="imgs/planetearth.png"></img>
                  </div>
                </div>
            </div>
          </div>
        </Element>
        <Element
          name="prizes"
          className={`${styles["section"]} ${styles["half-screen"]}`}
        >
          <div className={styles["section-content"]}>
            <div className={styles["title"]}>prizes</div>
            <div className={styles["text-box2"]}>
              <p>
                <b> Best Overall Hack</b>
              </p>
              <div className={styles["about-icon-wrapper2"]}>
                  <div className={styles["about-icon2"]}>
                    <img src="imgs/sonyheadphones.jpg"></img>
                  </div>
              </div>
              <p>
                <b>Best in Category Sustainable and Healthy Cities and Communities</b>
              </p>
              <div className={styles["about-icon-wrapper2"]}>
                  <div className={styles["about-icon2"]}>
                    <img src="imgs/sprout.jpg"></img>
                  </div>
              </div>
              <p>
                <b>Best in Category Quality of Life for College Students</b>
              </p>
              <div className={styles["about-icon-wrapper2"]}>
                  <div className={styles["about-icon2"]}>
                    <img src="imgs/keyboard.jpg"></img>
                  </div>
              </div>
              <p>
                <b>Best Beginner Hack</b>
              </p>
              <div className={styles["about-icon-wrapper2"]}>
                  <div className={styles["about-icon2"]}>
                    <img src="imgs/diffuser.jpg"></img>
                  </div>
              </div>
              <p>
                <b>Honorable Mention</b>
              </p>
              <div className={styles["about-icon-wrapper2"]}>
                  <div className={styles["about-icon2"]}>
                    <img src="imgs/kingfisher.jpg"></img>
                  </div>
              </div>
            </div>
          </div>
        </Element>
        <Element
          name="faq"
          className={`${styles["section"]} ${styles["half-screen"]}`}
        >
          <div className={styles["section-content"]}>
            <div className={styles["title"]}>faq</div>
            <div className={styles["text-box"]}>
              <p>
                <b>Where will the event be held?</b>
              </p>
              <p>
                The event will be hosted in the ECE building as well as Discord. Participants are required to attend the Kickoff and there are optional in-person workshops. Food, swag, and workspaces are also provided. Mentors will be present both virtually and in person!
              </p>
              <br />
              <p>
                <b>Can I join if I'm not in WECE?</b>
              </p>
              <p>
                Yes! This hackathon is open to everyone. If you enjoy it, we
                encourage you to stop by some of our other WECE events.
              </p>
              <br />
              <p>
                <b>Can I still sign up if I don't have a team?</b>
              </p>
              <p>
                Yes! We will have team-matching for those who sign up
                individually.
              </p>
              <br />
              <p>
                <b>Do I need experience to participate?</b>
              </p>
              <p>
                No experience is necessary; the hackathon is open for all skill levels! We will have web-dev, app-dev, and hardware workshops!
              </p>
              <p>
                <b>When is the deadline to sign up?</b>
              </p>
              <p>Please register by <b>April 15th</b> at 11:59PM CST.</p>
            </div>
          </div>
        </Element>
      </div>
    </WECEHacksLayout>
  );
}
