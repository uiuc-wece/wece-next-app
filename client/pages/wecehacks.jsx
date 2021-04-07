import {
  Link,
  Element,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll"
import {useEffect} from "react";
import Layout from "../components/layout";
import styles from "../styles/WECEHacks.module.css";


export default function WECEHacks() {
  useEffect(() => {
    scrollSpy.update();
  }, [])

  return (
    <Layout background_color="#362C43">
      <div className={styles["side-nav"]}>
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
      <div className={styles["pages"]}>
        <Element name="home" className={styles["section"]}>
          <div className={styles["lettering-wrapper"]}>
            <div className={styles["wece"]}>
              <h1>WECE</h1>
            </div>
            <div className={styles["hacks"]}>
              <h1>{"<hacks>"}</h1>
            </div>
            <div className={styles["caption"]}>
              <h6>May 1, 2021 | 9am - 9pm</h6>
            </div>
          </div>
        </Element>
        <Element
          name="about"
          className={`${styles["section"]} ${styles["half-screen"]}`}
        >
          <div className={styles["section-content"]}>
            <div className={styles["title"]}>about</div>
            <div className={styles["text-box"]}>
              <p>
                WECE is having our first-ever virtual hackathon focused on web
                development. WECE Hacks will be a day filled with workshops,
                mentorship, social events, team-bonding, and more! Join for our
                bootcamp to attend workshops and social events without
                submitting a project for the competition, or sign up with a team
                to compete in either the beginner or intermediate divisions for
                the hackathon. The mission of this event is to empower women in
                our community who might otherwise face barriers to entry in
                other hackathons, but we open this hackathon to all UIUC
                students. See you there!
              </p>
            </div>
          </div>
        </Element>
        <Element
          name="schedule"
          className={`${styles["section"]} ${styles["half-screen"]}`}
        >
          <div className={styles["section-content"]}>
            <div className={styles["title"]}>schedule</div>
            <div className={styles["text-box"]}>
              <p>
                <b>9-9:30am</b> – Welcome/Introduction to the event
              </p>
              <p>
                <b>9:30-10am</b> - Meet your team
              </p>
              <p>
                <b>10am</b> – Hackathon begins
              </p>
              <p>
                <b>10am-8pm</b> – Workshops + social events
              </p>
              <p>
                <b>8pm</b> – Hackathon ends
              </p>
              <p>
                <b>8-9pm</b> - Judging + team presentations
              </p>
              <p>
                <b>9pm</b> – Hackathon awards
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
            <div className={styles["text-box"]}>Sign up</div>
          </div>
        </Element>
        <Element
          name="faq"
          className={`${styles["section"]} ${styles["half-screen"]}`}
        >
          <div className={styles["section-content"]}>
            <div className={styles["title"]}>faq</div>
            <div className={styles["text-box"]}>Sign up</div>
          </div>
        </Element>
      </div>
    </Layout>
  );
}
